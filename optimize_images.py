#!/usr/bin/env python3
"""
Image Optimization Script for FM Tunisie Voyage
Converts images to WebP format and creates optimized versions
"""

import os
from PIL import Image
import json
from pathlib import Path
import shutil

def optimize_image(input_path, output_path, quality=85, max_width=1200):
    """Optimize a single image"""
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if needed
            if img.mode in ('RGBA', 'LA'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'RGBA':
                    background.paste(img, mask=img.split()[-1])
                else:
                    background.paste(img, mask=img.split()[-1])
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Resize if too large
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Save as WebP with optimization
            img.save(output_path, 'WEBP', quality=quality, optimize=True)
            return True
    except Exception as e:
        print(f"Error optimizing {input_path}: {e}")
        return False

def create_favicon_sizes(input_path, output_dir):
    """Create favicon sizes from logo"""
    sizes = [16, 32, 64]
    
    with Image.open(input_path) as img:
        img = img.convert('RGB')
        
        for size in sizes:
            favicon = img.resize((size, size), Image.Resampling.LANCZOS)
            output_path = output_dir / f"favicon-{size}x{size}.png"
            favicon.save(output_path, 'PNG', optimize=True)
            print(f"Created {size}x{size} favicon")

def optimize_all_images():
    """Main optimization function"""
    base_dir = Path("/workspace/voyage-tunisie")
    public_dir = base_dir / "public"
    images_dir = public_dir / "images"
    
    # Create backup directory
    backup_dir = base_dir / "backup_images"
    backup_dir.mkdir(exist_ok=True)
    
    print("🖼️ Starting image optimization...")
    
    # 1. Optimize main logo
    logo_input = public_dir / "logo.png"
    logo_backup = backup_dir / "logo.png"
    logo_optimized = public_dir / "logo.webp"
    
    if logo_input.exists():
        print(f"📄 Backing up logo.png ({logo_input.stat().st_size / 1024 / 1024:.1f}MB)")
        shutil.copy2(logo_input, logo_backup)
        
        print(f"✨ Optimizing logo to WebP...")
        if optimize_image(logo_input, logo_optimized, quality=90, max_width=400):
            print(f"   ✅ Logo optimized: {logo_optimized.stat().st_size / 1024:.1f}KB")
        else:
            print(f"   ❌ Failed to optimize logo")
    
    # 2. Create optimized favicons
    print("🎨 Creating optimized favicons...")
    if logo_input.exists():
        create_favicon_sizes(logo_input, public_dir)
    
    # 3. Optimize all images in images directory
    image_extensions = {'.jpg', '.jpeg', '.png', '.webp'}
    total_original_size = 0
    total_optimized_size = 0
    optimized_count = 0
    
    for img_file in images_dir.rglob("*"):
        if img_file.suffix.lower() in image_extensions:
            original_size = img_file.stat().st_size
            total_original_size += original_size
            
            # Create WebP version
            webp_path = img_file.with_suffix('.webp')
            backup_path = backup_dir / img_file.relative_to(public_dir)
            backup_path.parent.mkdir(parents=True, exist_ok=True)
            
            # Backup original
            shutil.copy2(img_file, backup_path)
            
            print(f"📸 Optimizing {img_file.name} ({original_size / 1024 / 1024:.1f}MB)")
            
            if optimize_image(img_file, webp_path, quality=85, max_width=1600):
                optimized_size = webp_path.stat().st_size
                total_optimized_size += optimized_size
                optimized_count += 1
                savings = original_size - optimized_size
                print(f"   ✅ Optimized: {optimized_size / 1024:.1f}KB (saved {savings / 1024:.1f}KB)")
                
                # Remove original if WebP created successfully
                try:
                    img_file.unlink()
                except:
                    print(f"   ⚠️ Could not remove original {img_file.name}")
            else:
                print(f"   ❌ Failed to optimize {img_file.name}")
                # Restore original from backup
                if backup_path.exists():
                    shutil.copy2(backup_path, img_file)
    
    # Summary
    print(f"\n📊 OPTIMIZATION SUMMARY")
    print(f"   Files optimized: {optimized_count}")
    print(f"   Total original size: {total_original_size / 1024 / 1024:.1f}MB")
    print(f"   Total optimized size: {total_optimized_size / 1024 / 1024:.1f}MB")
    print(f"   Total savings: {(total_original_size - total_optimized_size) / 1024 / 1024:.1f}MB")
    print(f"   Savings percentage: {((total_original_size - total_optimized_size) / total_original_size * 100):.1f}%")
    
    # Generate image metadata for responsive loading
    generate_image_metadata(images_dir, backup_dir)

def generate_image_metadata(images_dir, backup_dir):
    """Generate metadata for responsive images"""
    metadata = {}
    
    for img_file in images_dir.rglob("*.webp"):
        rel_path = img_file.relative_to(images_dir)
        original_backup = backup_dir / rel_path
        
        if original_backup.exists():
            with Image.open(original_backup) as img:
                width, height = img.size
                metadata[str(rel_path)] = {
                    "width": width,
                    "height": height,
                    "optimized": True,
                    "original_format": original_backup.suffix
                }
    
    # Save metadata
    metadata_path = images_dir / "image_metadata.json"
    with open(metadata_path, 'w') as f:
        json.dump(metadata, f, indent=2)
    
    print(f"📋 Generated image metadata: {metadata_path}")

if __name__ == "__main__":
    optimize_all_images()