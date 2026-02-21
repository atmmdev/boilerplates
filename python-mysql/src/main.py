"""
Example of a Python + MySQL connection.
Run: docker-compose run --rm app python src/main.py
"""
import os

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

import mysql.connector
from mysql.connector import Error

def main():
    try:
        conn = mysql.connector.connect(
            host=os.getenv("MYSQL_HOST", "mysql"),
            database=os.getenv("MYSQL_DATABASE", "python_study"),
            user=os.getenv("MYSQL_USER", "python_user"),
            password=os.getenv("MYSQL_PASSWORD", "python_pass"),
        )
        if conn.is_connected():
            cursor = conn.cursor()
            cursor.execute("SELECT VERSION();")
            version = cursor.fetchone()
            print(f"✓ Conectado ao MySQL {version[0]}")
            cursor.close()
            conn.close()
    except Error as e:
        print(f"✗ Erro: {e}")

if __name__ == "__main__":
    main()
