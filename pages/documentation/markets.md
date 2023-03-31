---
title: OpenMAMA Market Finder
sidebar: openmama_sidebar
permalink: markets.html
folder: openmama
datatable: true
---

OpenMAMA is an abstraction API for thousands of underlying data sources. It provides
support for global markets through a variety of open source projects, commercial products and
services as well as in-house proprietary projects. As such, consuming data via OpenMAMA is generally
provided via one of the following:

* A **consolidated service** provided by a third party for which an OpenMAMA bridge is available for the service
* A **feed handler** which consumes data directly from an exchange and publishes in a format for which an OpenMAMA bridge is available
* A **direct bridge** for OpenMAMA which understands the market data coming directly from an exchange directly

This page provides an index of every known currently supported MIC code as well as details on how to gain access to it.

<table id="sampleTable1" class="display">
  {% for row in site.data.openmama-mics %}
    {% if forloop.first %}
    <thead>
      <tr>
        {% for pair in row %}
          <th>{{ pair[0] }}</th>
        {% endfor %}
      </tr>
    </thead>
    {% endif %}
    {% if forloop.index == 1 %}
    <tbody>
    {% endif %}
      <tr>
        {% for pair in row %}
          {% if forloop.last %}
          <td>
            {% assign providers = pair[1] | split: ", "  %}
            {% for provider in providers %}
              <a href="provider_{{ provider | downcase }}.html">{{ provider }}</a>
            {% endfor %}
          </td>
          {% else %}
          <td>{{ pair[1] }}</td>
          {% endif %}
        {% endfor %}
      </tr>
    {% if forloop.last %}
    <tbody>
    {% endif %}
  {% endfor %}
