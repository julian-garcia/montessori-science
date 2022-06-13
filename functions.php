<?php

function theme_scripts() {
  wp_enqueue_style('montessori', get_template_directory_uri() . '/dist/main.css');
}

add_action('wp_enqueue_scripts', 'theme_scripts');

function add_meta_description_tag() {
  echo '<meta name="description" content="The mission of the Montessori Science Program at UVa is to amplify Montessori research globally and to leverage that research towards equity and access locally." />';
}
add_action( 'wp_head', 'add_meta_description_tag');