-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 15, 2024 at 06:33 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `signup`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `course_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `course_name`) VALUES
(1, 'JavaScript'),
(2, 'HTML'),
(3, 'CSS');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `name`, `email`, `password`) VALUES
(5, 'Sandesh', 'sandeshseth6@gmail.com', 'sandesh123');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('18WsvenEptYplRYU3aTj0Dvh3mn8iBVI', 1726472950, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":2}'),
('Bt3gnPWHXEuLGfRQcom_4n5G1CzIv-Lt', 1726472816, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":1}'),
('CRIBp6gCCuX6t9g92EfSe0227KsbZJKx', 1726499503, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":3}'),
('UGsaKydXgRdtqABRPHY-sGwegvF_v-at', 1726503198, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":5}'),
('VhatbnxJ7Wc8P4tZQIkD7rmbrDlJvtYP', 1726472813, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":1}'),
('YGbJpUhTElvRs49O8ppLq-mCB_qEbPD7', 1726501184, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":4}'),
('dMr57-w3rykMKMTSBSlE_2mPsA795CJx', 1726472944, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":2}'),
('jJgwk7TwdHwYn82AHbEouvWt-bGOsMDj', 1726472934, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":2}'),
('jLCeexOzH05kaTbitO7AsH3WmSvfyd2M', 1726472863, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":1}'),
('kbBnEmcUOtCG22CY_diETB8sba8CmT0w', 1726472827, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":1}'),
('tSr0eALppcsZMgrvy-jWjzB9_x7Gnni7', 1726502551, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":5}'),
('xMhfRMSslduaYIog1fU69cJrnwre1Vz4', 1726474203, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":3}');

-- --------------------------------------------------------

--
-- Table structure for table `study_material`
--

CREATE TABLE `study_material` (
  `id` int(11) NOT NULL,
  `course_id` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `study_material`
--

INSERT INTO `study_material` (`id`, `course_id`, `title`, `content`) VALUES
(1, 1, 'Introduction to JavaScript', 'JavaScript is a programming language that enables you to create dynamic and interactive web content. It is commonly used for front-end development.'),
(2, 1, 'JavaScript Variables and Data Types', 'In JavaScript, variables are containers for storing data values. JavaScript has various data types including string, number, boolean, object, and more.'),
(3, 1, 'JavaScript Functions', 'Functions are blocks of code designed to perform a particular task. Functions are executed when they are called.'),
(4, 1, 'JavaScript Events', 'JavaScript can be used to handle events such as clicks, mouse movements, and key presses. Event listeners can be attached to HTML elements to perform actions when events occur.'),
(5, 2, 'Introduction to HTML', 'HTML stands for HyperText Markup Language. It is the standard language for creating web pages and web applications.'),
(6, 2, 'HTML Elements and Tags', 'HTML is made up of elements and tags. Elements are the building blocks of HTML pages, and tags define the start and end of these elements.'),
(7, 2, 'HTML Attributes', 'Attributes provide additional information about HTML elements. They are always specified in the opening tag and are written as name/value pairs.'),
(8, 2, 'HTML Forms', 'Forms in HTML are used to collect user input. Forms can contain various types of input elements like text fields, radio buttons, checkboxes, and submit buttons.'),
(9, 3, 'Introduction to CSS', 'CSS stands for Cascading Style Sheets. It is used to style and layout web pages, including the design of colors, fonts, and spacing.'),
(10, 3, 'CSS Selectors', 'CSS selectors are used to target HTML elements that you want to style. Common selectors include element, class, and ID selectors.'),
(11, 3, 'CSS Box Model', 'The CSS box model describes the rectangular boxes generated for elements in the document tree. It consists of margins, borders, padding, and the content area.'),
(12, 3, 'CSS Flexbox', 'Flexbox is a layout model that allows you to design complex layouts with ease. It provides a more efficient way to distribute space and align items in a container.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `study_material`
--
ALTER TABLE `study_material`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_id` (`course_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `study_material`
--
ALTER TABLE `study_material`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `study_material`
--
ALTER TABLE `study_material`
  ADD CONSTRAINT `study_material_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
