#!/usr/bin/env python3
"""
PDF to JPEG Converter
Converts PDF files to JPEG images with high quality output.
"""

import os
import sys
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
            print(f"Saved: {output_path}")
        
        print(f"Successfully converted {len(images)} page(s) from '{pdf_path.name}'")
        return True
        
    except Exception as e:
        print(f"Error converting PDF: {e}")
        return False

def main():
    """Main function to handle command line usage."""
    if len(sys.argv) < 2:
        print("Usage: python pdf_to_jpeg_converter.py <pdf_file> [output_dir] [dpi] [quality]")
        print("Example: python pdf_to_jpeg_converter.py 'Red tailed hawk.pdf'")
        return
    
    pdf_file = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else None
    dpi = int(sys.argv[3]) if len(sys.argv) > 3 else 300
    quality = int(sys.argv[4]) if len(sys.argv) > 4 else 95
    
    convert_pdf_to_jpeg(pdf_file, output_dir, dpi, quality)

if __name__ == "__main__":
    main()

