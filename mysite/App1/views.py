from django.shortcuts import render
from django.shortcuts import render
from django.http import HttpResponse
from django import template
from django.template import loader

def index(request):
    """the index"""
    template = loader.get_template('App1/index.html')
    return HttpResponse(template.render(request))
