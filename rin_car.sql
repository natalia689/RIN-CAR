-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-11-2020 a las 15:47:42
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rin-car`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cita_revision`
--

CREATE TABLE `cita_revision` (
  `cita_revisionID` int(100) NOT NULL,
  `fecha_cita` datetime NOT NULL,
  `tipo_cita` varchar(50) NOT NULL,
  `tema_cita` varchar(100) NOT NULL,
  `costo_cita` double NOT NULL,
  `id_ccliente` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario_producto`
--

CREATE TABLE `comentario_producto` (
  `comentario_productoID` int(100) NOT NULL,
  `fecha_comentario` datetime NOT NULL,
  `comentario_producto` text NOT NULL,
  `id_usuario` int(100) NOT NULL,
  `id_producto` int(100) NOT NULL,
  `id_comentario` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dia_contable`
--

CREATE TABLE `dia_contable` (
  `dia_contableID` int(100) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `total_ganancias` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `dia_contable`
--

INSERT INTO `dia_contable` (`dia_contableID`, `fecha_creacion`, `total_ganancias`) VALUES
(1, '2020-11-16 08:57:58', 22455242),
(2, '2020-11-15 08:57:58', 326515469);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orden_compra`
--

CREATE TABLE `orden_compra` (
  `ID` int(100) NOT NULL,
  `tipo_vehiculo` varchar(100) NOT NULL,
  `cantidad_vendida` int(11) NOT NULL,
  `costo` double NOT NULL,
  `medio_pago` varchar(50) NOT NULL,
  `estado_compra` varchar(50) NOT NULL,
  `tipo_compra` varchar(50) NOT NULL,
  `fecha_compra` date NOT NULL,
  `id_cliente` int(100) NOT NULL,
  `id_proveedor` int(100) NOT NULL,
  `id_rin` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_rin`
--

CREATE TABLE `producto_rin` (
  `producto_rinID` int(100) NOT NULL,
  `color_rin` varchar(50) NOT NULL,
  `estado_rin` varchar(50) NOT NULL,
  `fecha_ingreso` datetime NOT NULL,
  `cantidad_stock` int(11) NOT NULL,
  `precio_unitario` double NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `marca` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `usuarioID` int(100) NOT NULL,
  `nombre_completo` varchar(100) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `telefono` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `estado` varchar(20) NOT NULL,
  `usuario_ingreso` varchar(100) NOT NULL,
  `contrasenha_ingreso` varchar(100) NOT NULL,
  `rol` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cita_revision`
--
ALTER TABLE `cita_revision`
  ADD PRIMARY KEY (`cita_revisionID`),
  ADD KEY `fk_cita_idCliente` (`id_ccliente`);

--
-- Indices de la tabla `comentario_producto`
--
ALTER TABLE `comentario_producto`
  ADD PRIMARY KEY (`comentario_productoID`),
  ADD KEY `fk_comentario_idCliente` (`id_usuario`),
  ADD KEY `fk_comentario_idProducto` (`id_producto`),
  ADD KEY `fk_comentario_idComentatio` (`id_comentario`);

--
-- Indices de la tabla `dia_contable`
--
ALTER TABLE `dia_contable`
  ADD PRIMARY KEY (`dia_contableID`);

--
-- Indices de la tabla `orden_compra`
--
ALTER TABLE `orden_compra`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_ordenCompra_idCliente` (`id_cliente`),
  ADD KEY `fk_ordenCompra_idProveedor` (`id_proveedor`),
  ADD KEY `fk_ordenCompra_idRin` (`id_rin`);

--
-- Indices de la tabla `producto_rin`
--
ALTER TABLE `producto_rin`
  ADD PRIMARY KEY (`producto_rinID`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuarioID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cita_revision`
--
ALTER TABLE `cita_revision`
  MODIFY `cita_revisionID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `comentario_producto`
--
ALTER TABLE `comentario_producto`
  MODIFY `comentario_productoID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `dia_contable`
--
ALTER TABLE `dia_contable`
  MODIFY `dia_contableID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `orden_compra`
--
ALTER TABLE `orden_compra`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `producto_rin`
--
ALTER TABLE `producto_rin`
  MODIFY `producto_rinID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `usuarioID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cita_revision`
--
ALTER TABLE `cita_revision`
  ADD CONSTRAINT `fk_cita_idCliente` FOREIGN KEY (`id_ccliente`) REFERENCES `usuario` (`usuarioID`);

--
-- Filtros para la tabla `comentario_producto`
--
ALTER TABLE `comentario_producto`
  ADD CONSTRAINT `fk_comentario_idCliente` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`usuarioID`),
  ADD CONSTRAINT `fk_comentario_idComentatio` FOREIGN KEY (`id_comentario`) REFERENCES `comentario_producto` (`comentario_productoID`),
  ADD CONSTRAINT `fk_comentario_idProducto` FOREIGN KEY (`id_producto`) REFERENCES `producto_rin` (`producto_rinID`);

--
-- Filtros para la tabla `orden_compra`
--
ALTER TABLE `orden_compra`
  ADD CONSTRAINT `fk_ordenCompra_idCliente` FOREIGN KEY (`id_cliente`) REFERENCES `usuario` (`usuarioID`),
  ADD CONSTRAINT `fk_ordenCompra_idProveedor` FOREIGN KEY (`id_proveedor`) REFERENCES `usuario` (`usuarioID`),
  ADD CONSTRAINT `fk_ordenCompra_idRin` FOREIGN KEY (`id_rin`) REFERENCES `producto_rin` (`producto_rinID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
