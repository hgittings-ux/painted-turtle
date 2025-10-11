#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Convert PDF to JPEG using pdf2pic (requires poppler-utils)
 * This is a Node.js alternative to the Python solution
 */

function convertPdfToJpeg(pdfPath, outputDir = null, options = {}) {
    const {
        dpi = 300,
        quality = 95,
        format = 'jpeg'
    } = options;

    const pdfFile = path.resolve(pdfPath);
    
    if (!fs.existsSync(pdfFile)) {
        console.error(`Error: PDF file '${pdfPath}' not found.`);
        return false;
    }

    const outputDirectory = outputDir ? path.resolve(outputDir) : path.dirname(pdfFile);
    const baseName = path.basename(pdfFile, '.pdf');
    
    try {
        // Ensure output directory exists
        if (!fs.existsSync(outputDirectory)) {
            fs.mkdirSync(outputDirectory, { recursive: true });
        }

        console.log(`Converting '${path.basename(pdfFile)}' to JPEG...`);

        // Use pdftoppm (from poppler-utils) to convert PDF to images
        const command = `pdftoppm -jpeg -r ${dpi} -jpegopt quality=${quality} "${pdfFile}" "${path.join(outputDirectory, baseName)}"`;
        
        execSync(command, { stdio: 'inherit' });
        
        console.log(`Successfully converted PDF to JPEG images in: ${outputDirectory}`);
        return true;

    } catch (error) {
        console.error('Error converting PDF:', error.message);
        console.log('\nNote: This script requires poppler-utils to be installed.');
        console.log('On Windows, you can install it via:');
        console.log('1. Download from: https://blog.alivate.com.au/poppler-windows/');
        console.log('2. Or use chocolatey: choco install poppler');
        console.log('3. Or use conda: conda install -c conda-forge poppler');
        return false;
    }
}

// Command line interface
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        console.log('Usage: node pdf-to-jpeg.js <pdf_file> [output_dir] [dpi] [quality]');
        console.log('Example: node pdf-to-jpeg.js "Red tailed hawk.pdf"');
        process.exit(1);
    }

    const pdfFile = args[0];
    const outputDir = args[1] || null;
    const dpi = parseInt(args[2]) || 300;
    const quality = parseInt(args[3]) || 95;

    convertPdfToJpeg(pdfFile, outputDir, { dpi, quality });
}

module.exports = { convertPdfToJpeg };

