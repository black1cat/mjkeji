"""empty message

Revision ID: 6f41c4bb0178
Revises: 
Create Date: 2020-11-20 23:44:01.080363

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '6f41c4bb0178'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('temperature_po')
    op.drop_column('abient', 'date')
    op.add_column('machine_temperature', sa.Column('date', sa.Date(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('machine_temperature', 'date')
    op.add_column('abient', sa.Column('date', sa.DATE(), nullable=True))
    op.create_table('temperature_po',
    sa.Column('id', mysql.INTEGER(display_width=11), autoincrement=False, nullable=False),
    sa.Column('time', mysql.DATETIME(), nullable=True),
    sa.Column('temperature', mysql.FLOAT(precision=255, scale=0), nullable=True),
    sa.Column('p_id', sa.DATE(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    mysql_default_charset='utf8',
    mysql_engine='InnoDB'
    )
    # ### end Alembic commands ###
