import xml.etree.ElementTree as ET

def parse_xml_and_extract_data(xml_file):
    
    tree = ET.parse(xml_file)
    root = tree.getroot()

    book_data = []
    for book_elem in root.findall('.//book'):
        title = book_elem.find('title').text
        author = book_elem.find('author').text
        book_data.append({'title': title, 'author': author})

    return book_data


xml_file_path = 'books.xml'
books_info = parse_xml_and_extract_data(xml_file_path)

for book in books_info:
    print(f'Title: {book["title"]}, Author: {book["author"]}')
