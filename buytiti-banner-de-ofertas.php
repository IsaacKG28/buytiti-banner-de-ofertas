<?php
/**
 * Plugin Name:       Buytiti-banner-de-ofertas
 * Plugin URI:        Buytiti.com
 * Description:       Bloque para añadir un carousel a buytiti.com
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Fernando Isaac Gonzalez Medina
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       buytiti-banner-de-ofertas
 *
 * @package           buytiti-banner-de-ofertas
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function buytiti_banner_de_ofertas_buytiti_banner_de_ofertas_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'buytiti_banner_de_ofertas_buytiti_banner_de_ofertas_block_init' );
