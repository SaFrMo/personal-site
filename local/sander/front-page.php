<?php get_header(); ?>

	<div class="headline">
		Sander<br />Moolin
		<div class="menu-trigger">
			<span class="line"></span>
			<span class="line"></span>
		</div>
	</div>

	<?php 
		$args = array(
			'menu'			=> 'main-menu',	
			'container_class'	=> 'main-menu'
		);
		wp_nav_menu($args);
	?>

	<div class="canvas-container">
		<canvas class="front-canvas"></canvas>
	</div>


<?php get_footer(); ?>