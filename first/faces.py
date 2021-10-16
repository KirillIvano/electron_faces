import cv2
import os
from argparse import ArgumentParser

def view_image(image, name_of_window):
    cv2.namedWindow(name_of_window, cv2.WINDOW_NORMAL)
    cv2.imshow(name_of_window, image)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

image_path = "/Users/wgwergwegwer/cher_labs/first/images"
face_cascade = cv2.CascadeClassifier('/Users/wgwergwegwer/cher_labs/first/haarcascade_frontalface_default.xml')

def parse_args():
    parser = ArgumentParser()

    parser.add_argument("-d", "--dir", required=True)

    args = parser.parse_args()

    return args

def faces(dir: str):
    files = map(lambda file: os.path.join(dir, file), os.listdir(dir))

    res = []

    for file in files:
        image = cv2.imread(file)
    
        gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

        faces = face_cascade.detectMultiScale(
            gray_image,
            scaleFactor= 1.1,
            minNeighbors= 5,
            minSize=(10, 10)
        )

        if len(faces) > 0:
            res.append([file, len(faces)])

    print(res)

faces(parse_args().dir)
