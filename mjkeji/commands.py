import click
from mjkeji import app,db
from mjkeji.model import User

@app.cli.command()
@click.option('--drop', is_flag=True, help='Create after drop.')
def initdb(drop):
  """Initialize the database."""
  if drop:
    db.drop_all()
  db.create_all()
  click.echo('Initialized database.')
