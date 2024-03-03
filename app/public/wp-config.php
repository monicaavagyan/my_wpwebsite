<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '90dKwm&2p;N1N*7T<C}gF%R9,OIyGKOSLtc|e<Gv>Z{SV.yy>LD%}Sqr7AIE_b~#' );
define( 'SECURE_AUTH_KEY',   '&WU@2$g?XWgo,:U(<wnrPS}J^Cjl_.&`h$M}>Rj{|>N@#cJl+LC0d.iKgd>rIR^F' );
define( 'LOGGED_IN_KEY',     's(78fDUC*dy.qtutu7RPzRC!;zSAAv+2l|b(urE>dui3nb(K^a}QG~gvT/l`gz|k' );
define( 'NONCE_KEY',         'Z>1o&^H)_O+kA?Hp{7O20zqs2)7$7f$)!Vv=sWP~u2.l`Y^`XupmV %FRqjhr9h_' );
define( 'AUTH_SALT',         'b80f&r:FvESp?</aK)7vP/A38F~cJ({}Ue&Z`Uzx+]q39+4r3WmQE*WawSSv;o5m' );
define( 'SECURE_AUTH_SALT',  'sb&X-Nb]cGyDk[WH1(z8s#QgJw80`3r<|fR}y6^wT<4En5!tm>qr+zZ:J` e_Xi(' );
define( 'LOGGED_IN_SALT',    'i.6iOe.jIYty+[3v#5GQjKRd]0o{AGzT)%@1@!@qdRc@{]!DR]=lMRnbt6H1>EIr' );
define( 'NONCE_SALT',        'mb([z6/uw%;g;1O+S91x[b4X&I}_C|W2d|0{uT<7-tZkEck].Nv}@o! O{LM=YM&' );
define( 'WP_CACHE_KEY_SALT', 'p*M;lkUh@eYwa[/|U[;aP}5L0m +w2nD==ar&?,0P$ %(8A.xQ@.Ho]O0Qc Zh)_' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
