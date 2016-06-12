sander2016 = {
	
	frontPageRenderer: null,
	
	init : function() {
		sander2016.initGeometry();
		sander2016.initMenuTrigger();
	},
	
	onResize : function() {
		sander2016.sizeCanvas();
	},
	
	initGeometry : function() {
		// Only run on front page
		if ( ! jQuery('.front-canvas').length ) return;
		
		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );

		sander2016.frontPageRenderer = new THREE.WebGLRenderer( { canvas: jQuery('.front-canvas')[0] } );
		sander2016.sizeCanvas();
		sander2016.frontPageRenderer.setClearColor( 0xffffff, 1 );
				
		// Create the central planet on the main pageX
		geometry = new THREE.IcosahedronGeometry(150, 2);
		material = new THREE.MeshLambertMaterial({shading: THREE.FlatShading, color: 0xdcdcdc, wireframe: true, wireframeLinewidth: 1});
		mesh = new THREE.Mesh(geometry, material);
		mesh.position.z = -250;
		scene.add(mesh);
		

		var render = function () {
			requestAnimationFrame( render );

			mesh.rotation.x += 0.001;
			mesh.rotation.y += 0.001;

			sander2016.frontPageRenderer.render(scene, camera);
		};
		
		render();

	},
	
	sizeCanvas : function() {		
		var h = window.innerHeight * .5;
		h = (h > 600 ? 600 : h);
		sander2016.frontPageRenderer.setSize( h, h );
		jQuery('.canvas-container').css('height', h + 'px');
	},
	
	initMenuTrigger : function() {
		jQuery('.menu-trigger').on('click', function() {
			jQuery('body').toggleClass('menu-open');
		});
	}
	
	
}

jQuery(document).ready(function() {
	sander2016.init();
	jQuery(window).on('resize', sander2016.onResize);
});