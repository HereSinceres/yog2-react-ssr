{% extends 'home:page/layout.tpl' %}

{% block content %}
       <div class="todoapp" id="root">{{ssr|raw}}</div>   
{% script %}
       var run = require('home:page/index/client.jsx');
       run();
{% endscript %}
 
{% require "home:page/index/index.tpl" %}{% endblock %}

