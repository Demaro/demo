# Generated by Django 2.0.4 on 2018-06-16 01:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cuentas', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contacto',
            name='company',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='contacto',
            name='fono',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
