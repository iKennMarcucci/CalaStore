-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-11-2022 a las 14:40:04
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cala_store`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `precio` int(100) NOT NULL,
  `id_categoria` int(10) NOT NULL,
  `activo` int(2) NOT NULL DEFAULT 1,
  `img` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `id_categoria`, `activo`, `img`) VALUES
(1, 'Body Rosa', 45000, 1, 1, 'BODY1.png'),
(2, 'Body Naranja', 45000, 1, 1, 'BODY2.png'),
(3, 'Crop Top Polilicra Elegante Hero Amarillo', 40000, 2, 1, 'CropTop1.png\n'),
(4, 'Crop Top Polilicra Básico Hero Amarillo Claro', 30000, 2, 1, 'CropTop2.png'),
(5, 'Crop Top Polilicra Básico Hero Rojo', 30000, 2, 1, 'CropTop3.png'),
(6, 'Crop Top Polilicra Básico Hero Violeta', 30000, 2, 1, 'CropTop4.png'),
(7, 'Crop Top Polilicra Básico Hero Verde', 30000, 2, 1, 'CropTop5.png'),
(8, 'Licra Hero Sublimada Azul Claro', 65000, 3, 1, 'Legging1.png'),
(9, 'Licra Hero Sublimada Azul/Violeta', 65000, 3, 1, 'Legging2.png'),
(10, 'Licra Hero Sublimada', 65000, 3, 1, 'Legging3.png\r\n'),
(11, 'Licra Hero Sublimada Estilo Manchas Claras', 65000, 3, 1, 'Legging4.png'),
(13, 'Licra Hero Sublimada', 65000, 3, 1, 'Legging5.png'),
(14, 'Licra Hero Sublimada', 65000, 3, 1, 'Legging6.png'),
(15, 'Licra Hero Efecto Jean', 70000, 3, 1, 'Legging7.png'),
(16, 'Licra Hero Efecto Jean', 70000, 3, 1, 'Legging8.png'),
(17, 'Licra Hero Efecto Jean Claro', 70000, 3, 1, 'Legging9.png'),
(18, 'Licra Hero Efecto Jean Rasgado', 70000, 3, 1, 'Legging10.png'),
(19, 'Licra Hero Efecto Jean Bota Ancha', 70000, 3, 1, 'Legging11.png'),
(20, 'Licra Hero Efecto Jean Bota Ancha', 70000, 3, 1, 'Legging12.png'),
(21, 'Licra Hero Efecto Jean Bota Ancha', 70000, 3, 1, 'Legging13.png'),
(22, 'Licra Hero Efecto Jean Bota Ancha', 70000, 3, 1, 'Legging14.png'),
(23, 'Licra Hero Efecto Jean Bota Ancha', 70000, 3, 1, 'Legging15.png'),
(24, 'Licra Hero Efecto Jean Bota Ancha Verde', 70000, 3, 1, 'Legging16.png'),
(25, 'Licra Hero Efecto Jean', 70000, 3, 1, 'Legging17.png'),
(26, 'Licra Hero Efecto Jean', 70000, 3, 1, 'Legging18.png'),
(27, 'Licra Hero Unicolor Lisa Azul Rey', 45000, 3, 1, 'Legging19.png'),
(28, 'Licra Hero Unicolor Lisa Lila', 45000, 3, 1, 'Legging20.png'),
(29, 'Licra Hero Unicolor Lisa Roja', 45000, 3, 1, 'Legging21.png'),
(30, 'Licra Hero Unicolor Lisa Naranja', 45000, 3, 1, 'Legging22.png'),
(31, 'Licra Hero Unicolor Lisa Verde Militar', 45000, 3, 1, 'Legging23.png'),
(32, 'Licra Hero Unicolor Lisa Azul Cielo', 45000, 3, 1, 'Legging24.png'),
(33, 'Licra Hero Unicolor Lisa Azul Oscuro', 45000, 3, 1, 'Legging25.png'),
(34, 'Licra Hero Unicolor Lisa Gris', 45000, 3, 1, 'Legging26.png'),
(35, 'Licra Hero Con Malla Rosado Flamenco', 60000, 3, 1, 'Legging27.png'),
(36, 'Licra Hero Con Malla Azul', 60000, 3, 1, 'Legging28.png'),
(37, 'Licra Hero Con Malla Aguamarina', 60000, 3, 1, 'Legging29.png'),
(38, 'Licra Hero Sublimada Rayas Rosas', 65000, 4, 1, 'Legging1.png'),
(39, 'Licra Hero Sublimada Rayas Violetas', 65000, 4, 1, 'Legging2.png'),
(40, 'Licra Hero Sublimada Azul/Rosa', 65000, 4, 1, 'Legging3.png'),
(41, 'Licra Hero Sublimada Gris', 65000, 4, 1, 'Legging4.png'),
(42, 'Licra Hero Sublimada Rayas Rosas', 65000, 4, 1, 'Legging5.png'),
(43, 'Licra Hero Sublimada Rayada', 65000, 4, 1, 'Legging6.png'),
(44, 'Licra Hero Sublimada Estilo Natural', 65000, 4, 1, 'Legging7.png'),
(45, 'Licra Hero Sublimada Vinotinto', 65000, 4, 1, 'Legging8.png'),
(46, 'Licra Hero Sublimada Azul/Rosa', 65000, 4, 1, 'Legging9.png'),
(47, 'Licra Hero Sublimada Rayada', 65000, 4, 1, 'Legging10.png'),
(48, 'Licra Hero Efecto Jean', 75000, 4, 1, 'Legging11.png'),
(49, 'Licra Hero Efecto Jean Azul', 75000, 4, 1, 'Legging12.png'),
(50, 'Licra Hero Efecto Jean Azul Claro', 75000, 4, 1, 'Legging13.png'),
(51, 'Licra Hero Efecto Jean Violeta Oscuro Degradado', 75000, 4, 1, 'Legging14.png'),
(52, 'Licra Hero Efecto Jean', 75000, 4, 1, 'Legging15.png'),
(53, 'Top Hero Sublimado', 37000, 5, 1, 'Top1.png'),
(54, 'Top Hero Sublimado', 37000, 5, 1, 'Top2.png'),
(55, 'Top Hero Sublimado', 37000, 5, 1, 'Top3.png'),
(56, 'Top Hero Sublimado', 37000, 5, 1, 'Top4.png'),
(57, 'Top Hero Sublimado', 37000, 5, 1, 'Top5.png'),
(58, 'Top Hero Sublimado', 37000, 5, 1, 'Top6.png'),
(59, 'Top Hero Sublimado', 37000, 5, 1, 'Top7.png'),
(60, 'Top Hero Sublimado', 37000, 5, 1, 'Top8.png'),
(61, 'Top Hero Sublimado', 37000, 5, 1, 'Top9.png'),
(62, 'Top Hero Sublimado', 37000, 5, 1, 'Top10.png'),
(63, 'Top Hero Sublimado', 37000, 5, 1, 'Top11.png'),
(64, 'Top Hero Sublimado', 37000, 5, 1, 'Top12.png'),
(65, 'Top Hero Sublimado', 37000, 5, 1, 'Top13.png'),
(66, 'Top Hero Sublimado', 37000, 5, 1, 'Top14.png'),
(67, 'Top Hero Sublimado', 37000, 5, 1, 'Top15.png'),
(68, 'Top Hero Sublimado', 37000, 5, 1, 'Top16.png'),
(69, 'Top Hero Sublimado', 37000, 5, 1, 'Top17.png'),
(70, 'Top Hero Sublimado', 37000, 5, 1, 'Top18.png'),
(71, 'Top Hero Sublimado', 37000, 5, 1, 'Top19.png'),
(72, 'Top Hero Sublimado', 37000, 5, 1, 'Top20.png'),
(73, 'Top Hero Sublimado', 37000, 5, 1, 'Top21.png'),
(74, 'Top Hero Sublimado', 37000, 5, 1, 'Top22.png'),
(75, 'Top Hero Sublimado', 37000, 5, 1, 'Top23.png'),
(76, 'Top Hero Sublimado', 37000, 5, 1, 'Top24.png'),
(77, 'Top Hero Sublimado', 37000, 5, 1, 'Top25.png'),
(78, 'Top Hero Sublimado', 37000, 5, 1, 'Top26.png'),
(79, 'Top Hero Sublimado', 37000, 5, 1, 'Top27.png'),
(80, 'Top Hero Sublimado', 37000, 5, 1, 'Top28.png'),
(81, 'Top Hero Sublimado', 37000, 5, 1, 'Top29.png'),
(82, 'Top Hero Sublimado', 37000, 5, 1, 'Top30.png'),
(83, 'Top Hero Sublimado', 37000, 5, 1, 'Top31.png'),
(84, 'Top Hero Sublimado', 37000, 5, 1, 'Top32.png'),
(85, 'Top Hero Sublimado', 37000, 5, 1, 'Top33.png'),
(86, 'Top Hero Sublimado', 37000, 5, 1, 'Top34.png'),
(87, 'Top Hero Sublimado', 37000, 5, 1, 'Top35.png'),
(88, 'Top Hero Sublimado', 37000, 5, 1, 'Top36.png'),
(89, 'Top Hero Sublimado', 37000, 5, 1, 'Top37.png'),
(90, 'Top Hero Sublimado', 37000, 5, 1, 'Top38.png'),
(91, 'Top Hero Sublimado', 37000, 5, 1, 'Top39.png'),
(92, 'Top Hero Sublimado', 37000, 5, 1, 'Top40.png'),
(93, 'Top Hero Sublimado', 37000, 5, 1, 'Top41.png'),
(94, 'Top Hero Sublimado', 37000, 5, 1, 'Top42.png'),
(95, 'Top Hero Sublimado', 37000, 5, 1, 'Top43.png'),
(96, 'Top Hero Sublimado', 37000, 5, 1, 'Top44.png'),
(97, 'Top Hero Sublimado', 37000, 5, 1, 'Top45.png'),
(98, 'Top Hero Sublimado', 37000, 5, 1, 'Top46.png'),
(99, 'Top Hero Sublimado', 37000, 5, 1, 'Top47.png'),
(100, 'Top Hero Sublimado', 40000, 5, 1, 'Top48.png'),
(101, 'Top Hero Sublimado', 37000, 5, 1, 'Top49.png'),
(102, 'Top Hero Suplex con Apertura Adelante', 42000, 5, 1, 'Top50.png'),
(103, 'Top Hero Brasier Texturizado Azul Claro', 40000, 5, 1, 'Top51.png'),
(104, 'Top Hero Brasier Texturizado Rosa', 40000, 5, 1, 'Top52.png'),
(105, 'Top Hero Brasier Texturizado Violeta', 40000, 5, 1, 'Top53.png'),
(106, 'Top Hero con Escote en la Espalda', 40000, 5, 1, 'Top54.png'),
(107, 'Top Hero Cruzado Atrás Lila', 42000, 5, 1, 'Top55.png'),
(108, 'Top Hero con Manga Azul', 40000, 5, 1, 'Top56.png'),
(109, 'Top Hero Sublimado Negro', 40000, 5, 1, 'Top57.png'),
(110, 'Conjunto Hero Licra y Top Texturizados Rosado', 93000, 6, 1, 'Conjunto1.png'),
(111, 'Conjunto Hero Licra y Top Sublimados', 92000, 6, 1, 'Conjunto2.png'),
(112, 'Conjunto Hero Licra y Top Sublimados', 92000, 6, 1, 'Conjunto3.png'),
(113, 'Conjunto Hero Licra y Top Sublimados', 92000, 6, 1, 'Conjunto4.png'),
(114, 'Conjunto Hero Licra y Top Sublimados', 92000, 6, 1, 'Conjunto5.png'),
(115, 'Conjunto Hero Licra y Top Sublimados', 92000, 6, 1, 'Conjunto6.png'),
(116, 'Conjunto Hero Licra y Top Sublimados', 92000, 6, 1, 'Conjunto7.png'),
(117, 'Conjunto Hero Licra y Top Sublimados', 92000, 6, 1, 'Conjunto8.png'),
(118, 'Conjunto Hero Licra y Top Sublimados', 92000, 6, 1, 'Conjunto9.png'),
(119, 'Conjunto Hero Licra y Top Sublimados', 92000, 6, 1, 'Conjunto10.png'),
(120, 'Conjunto Hero Falda Corta y Blusa Roja con Manga', 75000, 6, 1, 'Conjunto11.png'),
(121, 'Conjunto Hero Falda Larga y Blusa Siza', 79000, 6, 1, 'Conjunto12.png'),
(122, 'Conjunto Hero Buzo Rosa Manga Larga y Short Corto Rosa', 72000, 6, 1, 'Conjunto13.png'),
(123, 'Conjunto Hero Licra y Top Sublimados', 90000, 6, 1, 'Conjunto14.png'),
(124, 'Conjunto Hero Licra y Top Sublimados', 90000, 6, 1, 'Conjunto15.png'),
(125, 'Conjunto Hero Licra y Top Sublimados', 90000, 6, 1, 'Conjunto16.png'),
(126, 'Crop Tops Hero en Tela Fría Carmesí', 37000, 7, 1, 'Blusa1.png'),
(127, 'Blusas DF Unicolor', 34000, 7, 1, 'Blusa2.png'),
(128, 'Blusa Olimpica con Arrucado al Frente Unicolor', 34000, 7, 1, 'Blusa3.png'),
(129, 'Blusa Olimpica con Líneas Atrás Unicolor', 34000, 7, 1, 'Blusa4.png'),
(130, 'Blusa Olimpica con Detalles al Costado Unicolor', 34000, 7, 1, 'Blusa5.png'),
(131, 'Blusa Hero Larga Unicolor', 34000, 7, 1, 'Blusa6.png'),
(132, 'Blusa Hero Holgada Unicolor', 42000, 7, 1, 'Blusa7.png'),
(133, 'Blusas DF Unicolor', 34000, 7, 1, 'Blusa8.png'),
(134, 'Blusa Hero Holgada Unicolor', 42000, 7, 1, 'Blusa9.png'),
(135, 'Blusa Hero Mallatex Larga Unicolor', 34000, 7, 1, 'Blusa10.png'),
(136, 'Crop Top Hero Unicolor', 40000, 7, 1, 'Blusa11.png'),
(137, 'Blusa Hero Manga Larga Blanca', 39000, 7, 1, 'Blusa12.png'),
(138, 'Blusa Hero con Capucha Manga Larga Rosa', 41000, 7, 1, 'Blusa13.png'),
(139, 'Enterizo Hero Corto Unicolor Azul ', 90000, 8, 1, 'Enterizo1.png'),
(140, 'Enterizo Hero Corto Unicolor Aguamarina ', 90000, 8, 1, 'Enterizo2.png'),
(141, 'Enterizo Hero Lila Pastel ', 106000, 8, 1, 'Enterizo3.png'),
(142, 'Enterizo Hero Abertura Trasera Negro', 106000, 8, 1, 'Enterizo4.png'),
(143, 'Enterizo Hero Largo Efecto Cuerina', 89600, 8, 1, 'Enterizo5.png'),
(144, 'Enterizo Hero Largo Efecto Cuerina', 89600, 8, 1, 'Enterizo6.png'),
(145, 'Enterizo Hero Largo Yacar Salmón', 107000, 8, 1, 'Enterizo7.png'),
(146, 'Enterizo Hero Largo Yacar Rosado Pálido', 107000, 8, 1, 'Enterizo8.png'),
(147, 'Enterizo Hero Largo Yacar Rosado Pálido', 107000, 8, 1, 'Enterizo9.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=148;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
