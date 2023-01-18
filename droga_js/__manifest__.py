# -*- coding: utf-8 -*-
{
    'name': "Droga JS",

    # any module necessary for this one to work correctly
    'depends': ['base', 'account'],

    # always loaded
    'data': [
        'views/test_view.xml',
    ],

    "assets": {

        "web.assets_backend": [
            'droga_js/static/src/js/*.js',
            'droga_js/static/src/xml/*.xml',
        ],

    },

    'installable': True,
    'application': True,

}
