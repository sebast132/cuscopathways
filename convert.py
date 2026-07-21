from PIL import Image
import sys

def convert_to_webp(input_path, output_path):
    try:
        img = Image.open(input_path)
        img.save(output_path, "WEBP", quality=85)
        print("Conversion successful.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) == 3:
        convert_to_webp(sys.argv[1], sys.argv[2])
    else:
        print("Usage: python convert.py input output")
