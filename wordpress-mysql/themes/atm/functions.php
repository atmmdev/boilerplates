<?php
function my_style_scripts() {
  wp_enqueue_style('my_style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'my_style_scripts');
