from odoo import models, fields, api


class Patient(models.Model):
    _name = 'hm.patient'

    name = fields.Char("Full Name")
    birthdate = fields.Date("Birthdate")
