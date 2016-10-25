-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2016 at 08:49 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `test2`
--

-- --------------------------------------------------------

--
-- Table structure for table `users_bd`
--

CREATE TABLE IF NOT EXISTS `users_bd` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `blood_group` varchar(10) DEFAULT NULL,
  `image` varchar(100) NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `created` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `users_bd`
--

INSERT INTO `users_bd` (`id`, `name`, `blood_group`, `image`, `phone`, `created`) VALUES
(1, 'manish', 'A+', 'some.jpg', 987456210, '89546854'),
(4, 'manish', 'A+', 'some.jpg', 987456210, '89546854'),
(5, 'manish', 'A+', 'some.jpg', 987456210, '89546854'),
(6, 'manish', 'A+', 'some.jpg', 987456210, '89546854'),
(7, 'manish', 'A+', 'some.jpg', 987456210, '89546854'),
(9, 'manish', 'A+', 'some.jpg', 987456210, '89546854'),
(10, 'manish', 'A+', 'some.jpg', 987456210, '89546854'),
(11, 'manish', 'A+', 'some.jpg', 987456210, '89546854'),
(12, 'manish', 'A+', 'some.jpg', 987456210, '89546854'),
(13, 'manish', 'O+', 'some.jpg', 987456210, '89546854'),
(14, 'manish', 'O+', 'some.jpg', 987456210, '89546854');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
