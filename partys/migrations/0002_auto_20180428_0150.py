# Generated by Django 2.0.4 on 2018-04-28 01:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('partys', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='party',
            old_name='Location',
            new_name='location',
        ),
    ]
