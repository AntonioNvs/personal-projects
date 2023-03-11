import sqlite3

class Database:
  def __init__(self):
    self.name_database = 'data/database/database.db'

    self.create_init_tables()
    self.close_database()

  def create_init_tables(self) -> None:
    self.open_database_and_init_cursor()

    self.cursor.execute(
      """
        CREATE TABLE IF NOT EXISTS documents (
          id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
          url TEXT NOT NULL
        );
      """)

    self.cursor.execute(
      """
        CREATE TABLE IF NOT EXISTS phrases (
          id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
          text TEXT NOT NULL,
          translate TEXT,
          document_id INTEGER NOT NULL,
          FOREIGN KEY(document_id) REFERENCES documents(id)
        );
      """)

  def open_database_and_init_cursor(self):
    self.conn: sqlite3.Connection = sqlite3.connect(self.name_database)
    self.cursor = self.conn.cursor()

  def close_database(self):
    self.cursor.close()
    self.conn.close()

  def execute_command(self, command: str):
    self.open_database_and_init_cursor()

    self.cursor.execute(command)

    self.conn.commit()

    self.close_database()

  def select_table(self, command) -> list:
    self.open_database_and_init_cursor()

    self.cursor.execute(command)

    rows = []
    for row in self.cursor.fetchall():
      rows.append(row)

    self.close_database()

    return rows

class EnglishRevisionDatabase(Database):
  def __init__(self):
    super().__init__()
  
  def insert_document(self, url: str):
    self.execute_command(
      f"""
        INSERT INTO documents (url) VALUES ('{url}');
      """
    )

  def insert_phrase(self, text: str, document_id: int):
    self.execute_command(
      f"""
        INSERT INTO phrases (text, document_id) VALUES ('{text}', '{document_id}');
      """
    )

  def find_documment_by_url(self, url):
    return self.select_table(
      f"""
        SELECT * FROM documents WHERE url = '{url}';
      """
    )

  def find_phrase_by_id(self, id):
    return self.select_table(
      f"""
        SELECT * FROM phrases WHERE id = '{str(id)}';
      """
    )

  def list_phrases(self):
    return self.select_table(
      f"""
        SELECT * FROM phrases;
      """
    )

  def add_translate(self, id_phrase: str, translate: str):
    return self.execute_command(
      f"""
        UPDATE phrases
        SET translate = '{translate}'
        WHERE id = '{id_phrase}';
      """
    )


if __name__ == "__main__":
  x = Database()