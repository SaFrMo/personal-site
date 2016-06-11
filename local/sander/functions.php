<?php

// Register scripts
wp_register_script('sander', get_template_directory_uri() . '/js/sander2016.js');
wp_register_script('threejs', get_template_directory_uri() . '/js/three.min.js');
wp_register_script('threeResize', get_template_directory_uri() . '/js/threex.windowresize.js');

// Enqueue scripts
wp_enqueue_script('jquery');
wp_enqueue_script('threejs', 'jquery');
wp_enqueue_script('threeResize', 'threejs');
wp_enqueue_script('sander', array('jquery', 'threejs') );

// Nav menu setup
function register_my_menu() {
  register_nav_menu('header-menu',__( 'Header Menu' ));
}
add_action( 'init', 'register_my_menu' );

?>