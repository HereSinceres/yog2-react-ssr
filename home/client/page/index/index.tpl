{% extends 'home:page/layout.tpl' %}

{% block content %}
       <div class="todoapp" id="root">{{ssr|raw}}</div>   
{% script %}
       var run = require('./client.jsx');
       run();
{% endscript %}
 
{% endblock %}

