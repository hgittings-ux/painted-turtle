#!/usr/bin/env python3
"""
Batch PDF to JPEG Converter
Converts multiple PDF files to JPEG images with high quality output.
"""

import os
import sys
import glob
from pathlib import Path

try:
    from pdf2image import convert_from_path
    from PIL import Image
except ImportError:
    print("Required libraries not found. Installing...")
    os.system("pip install pdf2image pillow")
    from pdf2image import convert_from_path
    from PIL import Image

def convert_pdf_to_jpeg(pdf_path, output_dir=None, dpi=300, quality=95):
    """
    Convert PDF pages to JPEG images.
    
    Args:
        pdf_path (str): Path to the PDF file
        output_dir (str): Output directory (defaults to same directory as PDF)
        dpi (int): Resolution for output images (default: 300)
        quality (int): JPEG quality 1-100 (default: 95)
    """
    pdf_path = Path(pdf_path)
    
    if not pdf_path.exists():
        print(f"Error: PDF file '{pdf_path}' not found.")
        return False
    
    # Set output directory
    if output_dir is None:
        output_dir = pdf_path.parent
    else:
        output_dir = Path(output_dir)
        output_dir.mkdir(parents=True, exist_ok=True)
    
    try:
        print(f"Converting '{pdf_path.name}' to JPEG...")
        
        # Convert PDF to images
        images = convert_from_path(pdf_path, dpi=dpi)
        
        # Save each page as JPEG
        for i, image in enumerate(images, 1):
            output_filename = f"{pdf_path.stem}_page_{i:02d}.jpg"
            output_path = output_dir / output_filename
            
            # Convert to RGB if necessary (PDFs might be in CMYK)
            if image.mode != 'RGB':
                image = image.convert('RGB')
            
            # Save as JPEG with specified quality
            image.save(output_path, 'JPEG', quality=quality, optimize=True)
            print(f"  ✓ Saved: {output_path}")
        
        print(f"  ✓ Successfully converted {len(images)} page(s) from '{pdf_path.name}'")
        return True
        
    except Exception as e:
        print(f"  ✗ Error converting PDF: {e}")
        return False

def batch_convert_pdfs(directory=".", output_dir=None, dpi=300, quality=95, recursive=True):
    """
    Convert all PDF files in a directory to JPEG images.
    
    Args:
        directory (str): Directory to search for PDF files
        output_dir (str): Output directory (defaults to same directory as each PDF)
        dpi (int): Resolution for output images (default: 300)
        quality (int): JPEG quality 1-100 (default: 95)
        recursive (bool): Search subdirectories recursively (default: True)
    """
    directory = Path(directory)
    
    if not directory.exists():
        print(f"Error: Directory '{directory}' not found.")
        return
    
    # Find all PDF files
    if recursive:
        pdf_files = list(directory.rglob("*.pdf"))
    else:
        pdf_files = list(directory.glob("*.pdf"))
    
    if not pdf_files:
        print(f"No PDF files found in '{directory}'")
        return
    
    print(f"Found {len(pdf_files)} PDF file(s) to convert:")
    for pdf_file in pdf_files:
        print(f"  - {pdf_file}")
    
    print(f"\nStarting batch conversion...")
    print(f"Settings: DPI={dpi}, Quality={quality}")
    print("-" * 50)
    
    successful = 0
    failed = 0
    
    for pdf_file in pdf_files:
        if convert_pdf_to_jpeg(pdf_file, output_dir, dpi, quality):
            successful += 1
        else:
            failed += 1
        print()  # Add spacing between files
    
    print("-" * 50)
    print(f"Batch conversion complete!")
    print(f"✓ Successful: {successful}")
    print(f"✗ Failed: {failed}")
    print(f"Total processed: {successful + failed}")

def main():
    """Main function to handle command line usage."""
    if len(sys.argv) < 2:
        print("Batch PDF to JPEG Converter")
        print("=" * 40)
        print("Usage:")
        print("  python batch_pdf_converter.py <directory> [output_dir] [dpi] [quality]")
        print("  python batch_pdf_converter.py <pdf_file> [output_dir] [dpi] [quality]")
        print()
        print("Examples:")
        print("  python batch_pdf_converter.py .                    # Convert all PDFs in current directory")
        print("  python batch_pdf_converter.py public/images        # Convert all PDFs in public/images")
        print("  python batch_pdf_converter.py 'Red tailed hawk.pdf' # Convert single file")
        print("  python batch_pdf_converter.py . output 600 100     # High quality conversion")
        return
    
    target = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else None
    dpi = int(sys.argv[3]) if len(sys.argv) > 3 else 300
    quality = int(sys.argv[4]) if len(sys.argv) > 4 else 95
    
    # Check if target is a file or directory
    if os.path.isfile(target) and target.lower().endswith('.pdf'):
        # Single file conversion
        convert_pdf_to_jpeg(target, output_dir, dpi, quality)
    else:
        # Directory batch conversion
        batch_convert_pdfs(target, output_dir, dpi, quality)

if __name__ == "__main__":
    main()

