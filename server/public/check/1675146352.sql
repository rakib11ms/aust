-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2023 at 12:34 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `austta`
--

-- --------------------------------------------------------

--
-- Table structure for table `advertisements`
--

CREATE TABLE `advertisements` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `advertisement_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `posted_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `advertisement_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `home_page` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '1=true,0=false',
  `event_page` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '1=true,0=false',
  `news_page` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '1=true,0=false',
  `blog_page` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '1=true,0=false',
  `advertiser_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `show_time` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `show_days` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `advertiser_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `advertisement_fee` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_show_days` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `advertiser_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `reference_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `advertisement_file` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `showMobile` tinyint(1) NOT NULL DEFAULT 1,
  `showDesktop` tinyint(1) NOT NULL DEFAULT 1,
  `po_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isPublished` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `advertisements`
--

INSERT INTO `advertisements` (`id`, `advertisement_title`, `posted_by`, `updated_by`, `advertisement_description`, `home_page`, `event_page`, `news_page`, `blog_page`, `advertiser_name`, `show_time`, `show_days`, `advertiser_phone`, `advertisement_fee`, `last_show_days`, `redirect_link`, `advertiser_email`, `payment_type`, `reference_no`, `advertisement_file`, `position`, `showMobile`, `showDesktop`, `po_no`, `isPublished`, `created_at`, `updated_at`) VALUES
(47, 'our title', '1', NULL, '<p>sdahadd</p><p><br></p><p>asdas</p>', '1', '1', '1', '1', 'as', '10', '10', 'null', NULL, '2022-12-30', 'https://www.youtube.com/', 'raku@gmail.com', '0', 'null', NULL, 'null', 1, 1, 'as', '0', '2022-12-20 04:57:03', '2023-01-08 11:18:10'),
(48, 'Advertisenent title two', '1', NULL, '<p>Advertisenent description two</p>', '1', '0', '1', '0', 'Rasehed', '5', '20', '012371273912', NULL, '2023-01-09', 'https://github.com/', 'rashed@gmail.com', '0', '1234 rashed', '1671523648.pdf', 'top', 1, 1, 'Rasehed', '1', '2022-12-20 08:07:28', '2022-12-20 08:07:28'),
(50, 'new advertisment title', '1', NULL, '<p>new advertisment description</p>', '1', '0', '0', '0', 'ascd', '10', '10', 'asdda', NULL, '2022-12-30', 'hhttp:///asdsadasdasd', 'sada', '0', 'sada', NULL, 'middle', 1, 1, 'ascd', '0', '2022-12-20 10:55:40', '2023-01-08 11:18:10'),
(51, 'asd', '1', NULL, '<p>asdas</p>', '1', '0', '0', '0', 'sdsd', '12', '123', 'asd', '55', '2023-04-22', 'asdas', 'sad', '0', 'asdas', NULL, 'middle', 1, 1, 'sdsd', '1', '2022-12-20 10:57:10', '2022-12-20 10:57:10'),
(52, 'asdassd', '1', NULL, '<p>asdas</p>', '1', '1', '1', '1', 'we', '11', '12', 'weq', '45', '2023-01-01', 'werwe', 'wae', '0', 'sae', NULL, 'top', 1, 1, 'we', '0', '2022-12-20 11:04:48', '2023-01-08 11:18:10'),
(53, 'wde', '1', NULL, '<p>dsa</p>', '1', '1', '1', '1', 'rasek', '3', '3', 'rr', NULL, '2022-12-23', 'asda', 'rr', '0', 'r', NULL, 'middle', 1, 1, 'rasek', '0', '2022-12-20 11:09:37', '2023-01-08 11:18:10'),
(54, 'szx', '1', NULL, '<p>xzcz</p>', '0', '0', '1', '0', 'null', '12', '12', 'null', NULL, '2023-01-01', 'zxczx', 'null', '0', 'null', NULL, 'null', 1, 1, 'null', '0', '2022-12-20 11:14:09', '2023-01-08 11:18:10'),
(55, 'Advertisemeb', '1', NULL, '<p>Advertisenent title newww upd</p>', '1', '1', '1', '1', 'rasel hossain', '5', '5', '0166872131', NULL, '2022-12-26', 'Advertisenent title newwww', 'rasel@gmail.com', '0', '1232qe123123123123', NULL, 'bottom', 1, 1, 'rasel hossain', '0', '2022-12-21 06:54:29', '2023-01-08 11:18:10');

-- --------------------------------------------------------

--
-- Table structure for table `advertisement_multiple_images`
--

CREATE TABLE `advertisement_multiple_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `advertisement_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `advertisement_multiple_images`
--

INSERT INTO `advertisement_multiple_images` (`id`, `advertisement_id`, `image`, `created_at`, `updated_at`) VALUES
(39, '40', '1671422878brac.jpg', '2022-12-19 04:07:58', '2022-12-19 04:07:58'),
(40, '40', '1671422878mithila.jpg', '2022-12-19 04:07:58', '2022-12-19 04:07:58'),
(41, '41', '1671422961summer.jpg', '2022-12-19 04:09:21', '2022-12-19 04:09:21'),
(42, '41', '1671422961event4.jpg', '2022-12-19 04:09:21', '2022-12-19 04:09:21'),
(43, '41', '1671422961event2.jpg', '2022-12-19 04:09:21', '2022-12-19 04:09:21'),
(44, '42', '1671425866event4.jpg', '2022-12-19 04:57:46', '2022-12-19 04:57:46'),
(45, '42', '1671425866event2.jpg', '2022-12-19 04:57:46', '2022-12-19 04:57:46'),
(46, '43', '1671426370download (1).jfif', '2022-12-19 05:06:10', '2022-12-19 05:06:10'),
(47, '43', '1671426370download.jfif', '2022-12-19 05:06:10', '2022-12-19 05:06:10'),
(48, '44', '1671429901brac.jpg', '2022-12-19 06:05:01', '2022-12-19 06:05:01'),
(49, '44', '1671429901mithila.jpg', '2022-12-19 06:05:01', '2022-12-19 06:05:01'),
(52, '44', '1671450867ade]vert1.jpg', '2022-12-19 11:54:27', '2022-12-19 11:54:27'),
(53, '45', '1671450950brac.jpg', '2022-12-19 11:55:50', '2022-12-19 11:55:50'),
(54, '45', '1671450950mithila.jpg', '2022-12-19 11:55:50', '2022-12-19 11:55:50'),
(55, '44', '1671451423event2.jpg', '2022-12-19 12:03:43', '2022-12-19 12:03:43'),
(56, '46', '1671511905mithila.jpg', '2022-12-20 04:51:45', '2022-12-20 04:51:45'),
(57, '46', '1671511905brac.jpg', '2022-12-20 04:51:45', '2022-12-20 04:51:45'),
(58, '46', '1671511922event4.jpg', '2022-12-20 04:52:02', '2022-12-20 04:52:02'),
(59, '46', '1671511922event2.jpg', '2022-12-20 04:52:02', '2022-12-20 04:52:02'),
(60, '47', '1671512223brac.jpg', '2022-12-20 04:57:03', '2022-12-20 04:57:03'),
(61, '47', '1671512223mithila.jpg', '2022-12-20 04:57:03', '2022-12-20 04:57:03'),
(62, '47', '1671512239advertisment2.jpg', '2022-12-20 04:57:19', '2022-12-20 04:57:19'),
(63, '47', '1671512239ade]vert1.jpg', '2022-12-20 04:57:19', '2022-12-20 04:57:19'),
(64, '48', '1671523648brac.jpg', '2022-12-20 08:07:28', '2022-12-20 08:07:28'),
(65, '48', '1671523648mithila.jpg', '2022-12-20 08:07:28', '2022-12-20 08:07:28'),
(66, '49', '1671532856ic_round-verified-user.png', '2022-12-20 10:40:56', '2022-12-20 10:40:56'),
(67, '49', '1671532856Vector.png', '2022-12-20 10:40:56', '2022-12-20 10:40:56'),
(68, '50', '1671533740ic_round-verified-user.png', '2022-12-20 10:55:40', '2022-12-20 10:55:40'),
(69, '50', '1671533740Vector.png', '2022-12-20 10:55:40', '2022-12-20 10:55:40'),
(70, '51', '1671533830brac.jpg', '2022-12-20 10:57:10', '2022-12-20 10:57:10'),
(71, '51', '1671533830mithila.jpg', '2022-12-20 10:57:10', '2022-12-20 10:57:10'),
(72, '52', '1671534288Vector.png', '2022-12-20 11:04:48', '2022-12-20 11:04:48'),
(73, '52', '1671534288mithila.jpg', '2022-12-20 11:04:48', '2022-12-20 11:04:48'),
(74, '53', '1671534577ic_round-verified-user.png', '2022-12-20 11:09:37', '2022-12-20 11:09:37'),
(75, '53', '1671534577Vector.png', '2022-12-20 11:09:37', '2022-12-20 11:09:37'),
(76, '54', '1671534849ic_round-verified-user.png', '2022-12-20 11:14:09', '2022-12-20 11:14:09'),
(77, '54', '1671534849Vector.png', '2022-12-20 11:14:09', '2022-12-20 11:14:09'),
(80, '55', '1672132812download job.jpg', '2022-12-27 09:20:12', '2022-12-27 09:20:12'),
(81, '55', '1672132812jon fiar.jpg', '2022-12-27 09:20:12', '2022-12-27 09:20:12'),
(82, NULL, '1672474536price hike.jpg', '2022-12-31 08:15:36', '2022-12-31 08:15:36'),
(83, NULL, '1672474536download job.jpg', '2022-12-31 08:15:36', '2022-12-31 08:15:36'),
(84, NULL, '1672474569price hike.jpg', '2022-12-31 08:16:09', '2022-12-31 08:16:09'),
(85, NULL, '1672474569download job.jpg', '2022-12-31 08:16:09', '2022-12-31 08:16:09'),
(86, NULL, '1672474624price hike.jpg', '2022-12-31 08:17:04', '2022-12-31 08:17:04'),
(87, NULL, '1672474624download job.jpg', '2022-12-31 08:17:04', '2022-12-31 08:17:04'),
(88, NULL, '1672474641price hike.jpg', '2022-12-31 08:17:21', '2022-12-31 08:17:21'),
(89, NULL, '1672474641download job.jpg', '2022-12-31 08:17:21', '2022-12-31 08:17:21'),
(90, NULL, '1672474712price hike.jpg', '2022-12-31 08:18:32', '2022-12-31 08:18:32'),
(91, NULL, '1672474712download job.jpg', '2022-12-31 08:18:32', '2022-12-31 08:18:32'),
(92, NULL, '1672474730price hike.jpg', '2022-12-31 08:18:50', '2022-12-31 08:18:50'),
(93, NULL, '1672474730download job.jpg', '2022-12-31 08:18:50', '2022-12-31 08:18:50'),
(94, NULL, '1672474797price hike.jpg', '2022-12-31 08:19:57', '2022-12-31 08:19:57'),
(95, NULL, '1672474797download job.jpg', '2022-12-31 08:19:57', '2022-12-31 08:19:57');

-- --------------------------------------------------------

--
-- Table structure for table `article_blogs`
--

CREATE TABLE `article_blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subcategory_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `article_blog_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `posted_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `article_blog_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `article_blog_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isArchived` tinyint(1) NOT NULL DEFAULT 0,
  `isPublished` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `article_blogs`
--

INSERT INTO `article_blogs` (`id`, `category_id`, `subcategory_id`, `article_blog_title`, `posted_by`, `updated_by`, `article_blog_description`, `article_blog_image`, `isArchived`, `isPublished`, `created_at`, `updated_at`) VALUES
(7, '6', '6', 'RMG export in October increased by 3.27% to $3.67 bn', '1', NULL, '<p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><strong style=\"box-sizing: border-box; font-weight: bold;\">1) Emphasis on the capability-building process of both people and technology</strong></p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">For immediate changes for better profitability, this is important to focus on enhancing the capacity building of both people and technology. Adopting new technology and hiring new skilled people sometimes resulting higher costs and in some cases fail to provide the optimum level of expectation. So building capacity among the people and technology on existing setup is more practical and can be effective as well.</p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><strong style=\"box-sizing: border-box; font-weight: bold;\">2) A mechanism for evaluating the performance of the manufacturing regime.</strong></p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">This is more likely to relate to the above that a mechanism of evaluation has to be set just to enhance performance such as reducing various levels of waste, using less energy, particularly saving natural gas, also use low-cost or no-cost energy, for example, solar or rainwater.</p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Furthermore, the manufacturing unit can set data analysis based on changes in mechanism and received outcome to define effective result that offers the best evaluating performance.</p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><strong style=\"box-sizing: border-box; font-weight: bold;\">3)Increasing the performance capabilities of the products</strong></p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">To ensure the performance capabilities of an apparel product there are three prerequisite issues that need to consider –</p><ul style=\"box-sizing: border-box; padding: 0px; margin-bottom: 26px; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><li style=\"box-sizing: border-box; line-height: inherit; margin-left: 21px; margin-bottom: 10px;\">Understanding the customer,</li><li style=\"box-sizing: border-box; line-height: inherit; margin-left: 21px; margin-bottom: 10px;\">Managing customer requirements and</li><li style=\"box-sizing: border-box; line-height: inherit; margin-left: 21px; margin-bottom: 0px;\">Implement customer requirements.</li></ul><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">According to the Kano Model for identifying the most important features when creating a product is incorporates five categories: basic, performance/satisfiers, excitement/delighters, indifferent attributes, and reverse attributes. Users find a degree of importance in each of these features. An apparel product that lacks certain basic features could suffer from reduced functionality and irritate users.</p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">In general product, performance depends on the right level of functional features in the right product quality. But garment manufacturers of Bangladesh lacking to improve the performance capability of products and are not much keen to set plans for evolution.&nbsp; So increasing the performance capabilities of apparel products by the Bangladesh apparel manufacturer need to take short-term and long-term strategies.</p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><strong style=\"box-sizing: border-box; font-weight: bold;\">4) Offering more favorable product prices for comparable products</strong></p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">There are many different pricing strategies, but four common methods are more crucial aspects that determine the apparel businesses’ success.</p><ul style=\"box-sizing: border-box; padding: 0px; margin-bottom: 26px; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><li style=\"box-sizing: border-box; line-height: inherit; margin-left: 21px; margin-bottom: 10px;\">Competitive Pricing,</li><li style=\"box-sizing: border-box; line-height: inherit; margin-left: 21px; margin-bottom: 10px;\">Cost-plus Pricing,</li><li style=\"box-sizing: border-box; line-height: inherit; margin-left: 21px; margin-bottom: 10px;\">Markup Pricing and</li><li style=\"box-sizing: border-box; line-height: inherit; margin-left: 21px; margin-bottom: 0px;\">Demand Pricing</li></ul><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Among four<span>&nbsp;</span><strong style=\"box-sizing: border-box; font-weight: bold;\">‘</strong><strong style=\"box-sizing: border-box; font-weight: bold;\">Competitive Pricing’</strong><span>&nbsp;</span>is highly important to apparel retail giant who gathers competitive price intelligence and utilizes it to offer the cheapest price in the market.</p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">As the Bangladesh apparel industry is keen to grave low-cost products in a large volume that invites enormous global competitors for a best competitive price. The existing competitors like china, India, or Vietnam if considered less strong in the context of basic product prices that actually Bangladesh offers then newly rising countries like Myanmar, utopia or some other African nation can be a more stronger and new threat for the best affordable price.</p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><strong style=\"box-sizing: border-box; font-weight: bold;\">5) Development of an effective work environment</strong></p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">People are the key role player in the Bangladesh apparel industry where human resources are considered more powerful than adopting new technology. So this is highly important to take responsibility to ensure people in production feel safe and comfortable while at work and also feel satisfied with their roles. Creating a positive work environment, open line communication, facilitating opportunities, and offering training and development programs can increase efficiency and productivity.</p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><strong style=\"box-sizing: border-box; font-weight: bold;\">6)Workers in the apparel industry cannot afford to remain uneducated as new technology demands new skills.</strong></p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">According to Bangladesh’s labour force survey (LFS) in 2016, In terms of educational attainment, nearly 60 percent of all workers had at least completed their primary education. Among women workers, 29.1 percent had no formal education or had not completed their primary education, far higher than among men (17.9 percent).</p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">The above survey conveys only formal education while technical education for the garment sector remains unknown among the workers even mid-level management is sometimes considered to be the worse example of lacking formal education or technical learning from any of the educational institutions.&nbsp;</p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">In an article Research Gate publication says Chinese firms have started to invest in in-company training of their workforce in modern technology and managerial skills. On average, Chinese textile firms give 70 hours of training each year to an experienced worker as opposed to 32 hours in Canada and 10 hours in India (Chandra et al., 1998). This survey also found that about 16% of Indian firms did not provide any training to new employees as compared to 1.8% in China.</p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">Though the above is a scenario of the Indian apparel industry and so undoubtedly it can be said that Bangladesh might be under-rated than that of the Indian situation. Hence the individual Bangladesh apparel industry has to take initiative to offer skill development programs for the workers as well as for mid-level management.&nbsp;</p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><strong style=\"box-sizing: border-box; font-weight: bold;\">7)</strong><strong style=\"box-sizing: border-box; font-weight: bold;\">Operational challenges include reducing manufacturing &amp; delivery lead times</strong></p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">At the beginning of the 1990s, Bangladesh apparel industry observed a lead time of 120-150 days but in 2007, it was reduced to 30-50 days and at present, it is 90-100 days while China requires only 30 days due to their textile and other backward linkage facilities as well as export friendly management and supporting policy.</p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">It is quite challenging for the Bangladesh apparel industry to reduce the lead time though the industry has taken multiple initiatives to offer short lead time delivery bureaucratic barrier at Chittagong port for the imported garment raw materials halted the lead time improvement progress. Operational inefficiency and lack of power supply, insufficient natural gas supply, and oil price hikes make the progress slower in the delivery lead time and resulting losing business in the global competition.</p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">So to stay competitive in the<span>&nbsp;</span><a href=\"https://textilefocus.com/within-2-years-bangladesh-will-achieve-a-significant-business-share-in-the-global-apparel-market/\" target=\"_blank\" rel=\"noreferrer noopener\" style=\"box-sizing: border-box; background-color: transparent; color: rgb(77, 178, 236); text-decoration: none;\">global apparel market</a>, Bangladesh needs to<span>&nbsp;</span><em style=\"box-sizing: border-box;\">improve<span>&nbsp;</span></em>its lead time with the help of government policy and with the collective efforts of all stakeholders.&nbsp;</p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><strong style=\"box-sizing: border-box; font-weight: bold;\">8) Need to stop price conflict among the regional, small-medium,</strong><span>&nbsp;</span><strong style=\"box-sizing: border-box; font-weight: bold;\">and large players manufacturers in the industry.</strong></p><p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 26px; overflow-wrap: break-word; color: rgb(34, 34, 34); font-family: Verdana, BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">In Bangladesh context small-medium industry runs after a lack of capital or funding, retaining an inadequate management team, a faulty infrastructure or business model so they could rarely survive at competitive prices with big industries where Composite mills or large plants lack the flexibility to produce variety or small orders at low costs that causes brands to turn their face for a new manufacturer in the global arena. As a result, Bangladesh apparel industry losing competitiveness in the global market.</p>', '1669789608.jpg', 0, 1, '2022-11-30 06:26:48', '2022-11-30 06:26:48'),
(12, '5', '8', 'check title updte', '1', '1', '<p>check description update</p>', '1669959848.jfif', 0, 1, '2022-12-02 05:44:08', '2022-12-02 10:22:35'),
(13, '5', '7', 'habijabi blog', '1', '1', '<p>habijabi blog descriptionasdaaaaaaaaaa asdasdsad</p>', '1671017880.jpg', 0, 1, '2022-12-14 11:38:00', '2022-12-14 11:38:00'),
(14, '6', '6', 'hell article', '36', '36', 'undefined', '1672482217.jpg', 1, 0, '2022-12-31 10:23:37', '2023-01-02 09:35:40');

-- --------------------------------------------------------

--
-- Table structure for table `article_blog_categories`
--

CREATE TABLE `article_blog_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `article_blog_categories`
--

INSERT INTO `article_blog_categories` (`id`, `category_name`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(5, 'Blog', '1', NULL, '2022-11-28 05:25:27', '2022-11-30 06:17:11'),
(6, 'Article', '1', NULL, '2022-11-28 05:25:36', '2022-11-28 05:25:36');

-- --------------------------------------------------------

--
-- Table structure for table `article_blog_sub_categories`
--

CREATE TABLE `article_blog_sub_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subcategory_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `article_blog_sub_categories`
--

INSERT INTO `article_blog_sub_categories` (`id`, `category_id`, `subcategory_name`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(5, '6', 'Industry Practice', '1', NULL, '2022-11-30 06:18:18', '2022-11-30 06:18:18'),
(6, '6', 'Individual', '1', NULL, '2022-11-30 06:19:36', '2022-11-30 06:19:36'),
(7, '5', 'Expert Opinion', '1', NULL, '2022-11-30 06:19:58', '2022-11-30 06:19:58'),
(8, '5', 'Explorer', '1', NULL, '2022-11-30 10:58:54', '2022-11-30 11:00:32');

-- --------------------------------------------------------

--
-- Table structure for table `aussta_events`
--

CREATE TABLE `aussta_events` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `event_unique_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `event_type_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `event_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `posted_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `event_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_person` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `event_time` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `event_date` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `event_fee` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `priority` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_type` tinyint(1) NOT NULL DEFAULT 0,
  `showMobile` tinyint(1) NOT NULL DEFAULT 1,
  `showBanner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `notification_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `showDesktop` tinyint(1) NOT NULL DEFAULT 1,
  `isArchived` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `aussta_events`
--

INSERT INTO `aussta_events` (`id`, `event_unique_id`, `event_type_id`, `event_title`, `posted_by`, `updated_by`, `event_description`, `contact_person`, `event_time`, `event_date`, `event_fee`, `priority`, `payment_type`, `showMobile`, `showBanner`, `notification_type`, `showDesktop`, `isArchived`, `created_at`, `updated_at`) VALUES
(22, '342342342', '3', 'ahsdjas', NULL, '1', '<p>asdadbasjdgas</p>', '1', 'Tue, 20 Dec 2022 18:00:00 GMT', '2022-12-28', '0', 'high', 0, 1, '1', NULL, 1, 0, '2022-12-21 05:32:03', '2022-12-21 06:35:44'),
(25, '33454534', '3', 'oka poka', '1', NULL, '<p>oka poka</p>', '1,20', 'Tue, 20 Dec 2022 18:00:00 GMT', '2022-12-23', '0', 'high', 0, 1, '0', NULL, 1, 0, '2022-12-21 10:11:05', '2022-12-21 10:11:05'),
(26, '435345', '3', 'oaka joja', '1', NULL, '<p>oaka joja</p>', '1,20', 'Tue, 20 Dec 2022 18:01:00 GMT', '2022-12-30', '0', 'high', 0, 1, '0', NULL, 1, 0, '2022-12-21 10:14:57', '2022-12-21 10:14:57'),
(27, '234423', '3', 'oaka joja23', '1', NULL, '<p>oaka joja</p>', '1,20', 'Tue, 20 Dec 2022 18:01:00 GMT', '2022-12-30', '0', 'high', 0, 1, '0', NULL, 1, 0, '2022-12-21 10:24:12', '2022-12-21 10:24:12'),
(28, '1231235', '3', 'ads', '1', NULL, '<p>asdas</p>', '1,20', 'Tue, 20 Dec 2022 18:00:00 GMT', '2022-12-29', '400', 'normal', 1, 1, '0', NULL, 1, 0, '2022-12-21 10:55:03', '2022-12-21 10:55:03'),
(29, '1235123', '4', 'hello title', '1', NULL, '<p>hello description</p>', '1', 'Wed, 21 Dec 2022 18:00:00 GMT', '2022-12-31', '0', 'high', 0, 1, '1', NULL, 1, 0, '2022-12-22 04:23:25', '2022-12-22 04:23:25'),
(30, '122211659', '3', 'check again', '1', NULL, '<p>check again descripti0n</p>', '1', 'Thu, 22 Dec 2022 01:36:00 GMT', '2022-12-29', '500', 'high', 1, 1, '1', NULL, 1, 0, '2022-12-22 04:36:48', '2022-12-22 04:36:48'),
(31, '12236245', '4', 'our annual event', '1', NULL, '<p>our annual event description</p>', '1', 'Thu, 22 Dec 2022 18:00:00 GMT', '2022-12-31', '500', 'high', 1, 1, '0', NULL, 1, 0, '2022-12-23 05:40:53', '2022-12-23 05:40:53'),
(32, '122317207', '3', 'our annual bal', '1', NULL, '<p>our annual bal</p>', '1', 'Thu, 22 Dec 2022 18:00:00 GMT', '2022-12-27', '500', 'high', 1, 1, '0', NULL, 1, 0, '2022-12-23 12:16:06', '2022-12-23 12:16:06'),
(33, '122381903', '4', 'sadas', '1', NULL, '<p>sadas</p>', '1', 'Thu, 22 Dec 2022 18:08:00 GMT', '2022-12-19', '400', 'normal', 1, 1, '0', NULL, 1, 0, '2022-12-23 12:18:08', '2022-12-23 12:18:08'),
(34, '122378136', '4', 'sdfsdf', '1', NULL, '<p>sdf</p>', '1', 'Fri, 23 Dec 2022 01:35:00 GMT', '2022-12-28', '400', 'normal', 1, 1, '0', NULL, 1, 0, '2022-12-23 12:21:54', '2022-12-23 12:21:54'),
(35, '122339293', '4', 'sdfsdf77', '1', NULL, '<p>sdf</p>', '1', 'Fri, 23 Dec 2022 01:35:00 GMT', '2022-12-28', '400', 'normal', 1, 1, '0', NULL, 1, 0, '2022-12-23 12:22:45', '2022-12-23 12:22:45'),
(36, '122384548', '4', 'sdfsdf779', '1', NULL, '<p>sdf</p>', '1,35', 'Fri, 23 Dec 2022 01:35:00 GMT', '2022-12-28', '400', 'normal', 1, 1, '0', NULL, 1, 0, '2022-12-23 12:26:44', '2022-12-23 12:26:44'),
(37, '122352317', '3', 'uu', '1', NULL, '<p>asdas</p>', '1', 'Fri, 23 Dec 2022 00:29:00 GMT', '2022-12-26', '400', 'normal', 1, 1, '0', NULL, 1, 0, '2022-12-23 12:28:18', '2022-12-23 12:28:18'),
(38, '122322716', '4', 'asdasd', '1', NULL, '<p>asd</p>', '1', 'Thu, 22 Dec 2022 18:59:00 GMT', '2023-01-03', '40', 'normal', 1, 1, '0', NULL, 1, 0, '2022-12-23 16:29:10', '2022-12-23 16:29:10'),
(39, '122555478', '4', 'our txto', '1', NULL, '<p>our txto</p>', '1', 'Sat, 24 Dec 2022 18:30:00 GMT', '2022-12-13', '400', 'normal', 1, 1, '0', NULL, 1, 0, '2022-12-25 05:07:21', '2022-12-25 05:07:21'),
(40, '122581593', '4', 'check database notification', '1', NULL, '<p>check database notification</p>', '1,21,22', 'Sat, 24 Dec 2022 18:04:00 GMT', '2022-12-14', '500', 'normal', 1, 1, '0', NULL, 1, 0, '2022-12-25 06:13:33', '2022-12-25 06:13:33'),
(41, '122584431', '4', 'jamela', '1', NULL, '<p>jamela ase</p>', '1,21,22', 'Sun, 25 Dec 2022 00:29:00 GMT', '2022-12-22', '50', 'normal', 1, 1, '0', NULL, 1, 0, '2022-12-25 06:18:53', '2022-12-25 06:18:53'),
(42, '122536700', '4', 'jamela33', '1', NULL, '<p>jamela ase</p>', '1,21,22', 'Sun, 25 Dec 2022 00:29:00 GMT', '2022-12-22', '50', 'normal', 1, 1, '0', NULL, 1, 0, '2022-12-25 06:19:53', '2022-12-25 06:19:53'),
(43, '122561110', '4', 'jamela335', '1', NULL, '<p>jamela ase</p>', '1,21,22', 'Sun, 25 Dec 2022 00:29:00 GMT', '2022-12-22', '50', 'normal', 1, 1, '0', NULL, 1, 0, '2022-12-25 06:20:37', '2022-12-25 06:20:37'),
(44, '122588118', '4', 'jamela3357', '1', NULL, '<p>jamela ase</p>', '1,21,22', 'Sun, 25 Dec 2022 00:29:00 GMT', '2022-12-22', '50', 'normal', 1, 1, '0', NULL, 1, 0, '2022-12-25 06:21:29', '2022-12-25 06:21:29'),
(45, '12258626', '4', 'asdasasd', '1', NULL, '<p>asdas</p>', '1', 'Sun, 25 Dec 2022 00:30:00 GMT', '2022-12-28', '500', 'normal', 1, 1, '0', NULL, 1, 0, '2022-12-25 07:59:14', '2022-12-25 07:59:14'),
(46, '122549126', '4', 'asdasasdr', '1', NULL, '<p>asdas</p>', '1', 'Sun, 25 Dec 2022 00:30:00 GMT', '2022-12-28', '500', 'normal', 1, 1, '0', NULL, 1, 0, '2022-12-25 07:59:35', '2022-12-25 07:59:35'),
(47, '122581391', '4', 'asdasasdru', '1', NULL, '<p>asdas</p>', '1', 'Sun, 25 Dec 2022 00:30:00 GMT', '2022-12-28', '500', 'normal', 1, 1, '0', NULL, 1, 0, '2022-12-25 08:00:20', '2022-12-25 08:00:20'),
(48, '122539050', '2', 'usuras', '1', NULL, '<p>sduaud</p>', '38,37', 'Sun, 25 Dec 2022 05:00:00 GMT', '2022-12-22', '700', 'normal', 1, 1, '0', NULL, 1, 0, '2022-12-25 08:02:46', '2022-12-25 08:02:46'),
(49, '122557093', '4', 'uu7890', '1', NULL, '<p>fdfddf</p>', '1', 'Sat, 24 Dec 2022 18:00:00 GMT', '2022-12-28', '700', 'normal', 1, 1, '0', 'event_type', 1, 0, '2022-12-25 08:48:30', '2022-12-25 08:48:30'),
(50, '122533517', '2', 'uasd', '1', NULL, '<p>sydasa</p>', '1', 'Sun, 25 Dec 2022 00:30:00 GMT', '2022-12-28', '0', 'normal', 0, 1, '0', 'event_type', 1, 0, '2022-12-25 08:50:32', '2022-12-25 08:50:32'),
(51, NULL, '4', 'sports update', NULL, '1', '<p>Sports Update 2022</p>', '1', 'Sun, 25 Dec 2022 00:30:00 GMT', '2022-12-28', '0', 'normal', 0, 1, '0', 'event_type', 1, 0, '2022-12-25 08:51:59', '2022-12-27 09:39:53'),
(52, '122727864', '3', 'uuu', '1', NULL, '<p>uuuuda</p>', '1,20', 'Tue, 27 Dec 2022 00:31:00 GMT', '2022-12-30', '600', 'high', 1, 1, '1', 'event_type', 1, 0, '2022-12-27 10:59:07', '2022-12-27 10:59:07'),
(53, '122761666', '4', 'iausduasda', '1', NULL, '<p>yyasdyaysdaysda</p>', '1', 'Tue, 27 Dec 2022 00:30:00 GMT', '2022-12-29', '800', 'high', 1, 1, '0', 'event_type', 1, 0, '2022-12-27 11:03:43', '2022-12-27 11:03:43'),
(54, '12277592', '4', 'iasydauysd', '1', NULL, '<p>iuyuaysdya</p>', '1', 'Mon, 26 Dec 2022 23:26:00 GMT', '2022-12-31', '700', 'high', 1, 1, '1', 'event_type', 1, 0, '2022-12-27 11:12:40', '2022-12-27 11:12:40'),
(55, '122773968', '3', 'sgfdf', '1', NULL, '<p>sdfsd</p>', '1', 'Mon, 26 Dec 2022 23:23:00 GMT', '2022-12-29', '600', 'normal', 1, 1, '0', 'event_type', 1, 0, '2022-12-27 11:15:28', '2022-12-27 11:15:28'),
(56, '122748857', '2', 'sjgdf', '1', NULL, '<p>sjgdf</p>', '1', 'Mon, 26 Dec 2022 22:20:00 GMT', '2022-12-30', '600', 'high', 1, 1, '0', 'event_type', 1, 0, '2022-12-27 11:21:53', '2022-12-27 11:21:53'),
(57, '122768110', '3', 'afdhf', '1', NULL, '<p>hahgsdhga</p>', '1', 'Tue, 27 Dec 2022 00:29:00 GMT', '2022-12-29', '500', 'high', 1, 1, '0', 'event_type', 1, 0, '2022-12-27 11:27:11', '2022-12-27 11:27:11'),
(58, '122749345', '4', 'sada', '1', NULL, '<p>asdasd</p>', '1', 'Tue, 27 Dec 2022 00:30:00 GMT', '2022-12-30', '400', 'normal', 1, 1, '0', 'event_type', 1, 0, '2022-12-27 11:28:59', '2022-12-27 11:28:59'),
(59, '122765698', '4', 'yasdytastyd', '1', NULL, '<p>ytatsdtas</p>', '1', 'Mon, 26 Dec 2022 18:01:00 GMT', '2022-12-21', '500', 'high', 1, 1, '0', 'event_type', 1, 0, '2022-12-27 11:47:20', '2022-12-27 11:47:20'),
(60, '122759428', '4', 'yasdytastydasda', '1', NULL, '<p>ytatsdtas</p>', '1', 'Mon, 26 Dec 2022 18:01:00 GMT', '2022-12-21', '500', 'high', 1, 1, '0', 'event_type', 1, 0, '2022-12-27 11:47:57', '2022-12-27 11:47:57'),
(61, '122781368', '3', 'rhgew', '1', NULL, '<p>gdgasda</p>', '1', 'Tue, 27 Dec 2022 00:31:00 GMT', '2022-12-22', '500', 'normal', 1, 1, '0', 'event_type', 1, 0, '2022-12-27 12:01:02', '2022-12-27 12:01:02'),
(62, '122750729', '3', 'buuasasdas', '1', NULL, '<p>asdasd</p>', '1', 'Mon, 26 Dec 2022 23:24:00 GMT', '2023-01-06', '500', 'high', 1, 1, '1', 'event_type', 1, 0, '2022-12-27 12:08:34', '2022-12-27 12:08:34'),
(63, NULL, '2', 'full satck dd', NULL, '1', '<p><br></p><p><br></p><p><br></p><p>asdas</p>', NULL, 'Fri, 30 Dec 2022 18:59:00 GMT', '2023-01-24', '500', 'normal', 1, 1, '0', 'event_type', 1, 0, '2022-12-31 04:42:28', '2023-01-04 07:43:12'),
(64, '010443218', '4', 'sdxvxZ', '1', NULL, '<p>ZXZXG</p>', '36,37,38', 'Tue, 03 Jan 2023 18:06:00 GMT', '2023-01-31', '2000', 'high', 1, 1, '1', 'event_type', 1, 0, '2023-01-04 10:38:57', '2023-01-04 10:38:57'),
(65, '010893442', '4', 'check event', '36', NULL, '<p>check eevent description</p>', '38,36', 'Sat, 07 Jan 2023 23:25:00 GMT', '2023-01-27', '400', 'high', 1, 1, '1', 'event_type', 1, 0, '2023-01-08 10:06:43', '2023-01-08 10:06:43');

-- --------------------------------------------------------

--
-- Table structure for table `austtaa_batches`
--

CREATE TABLE `austtaa_batches` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `batch_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `austtaa_batches`
--

INSERT INTO `austtaa_batches` (`id`, `batch_name`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, '1st', '1', NULL, '2022-12-17 04:19:21', '2022-12-17 04:19:21'),
(2, '2nd', '1', NULL, '2022-12-17 04:19:22', '2022-12-17 06:18:23'),
(3, '3rd', '1', NULL, '2022-12-17 04:19:22', '2022-12-17 04:19:22'),
(5, '4th', '1', NULL, '2022-12-30 11:21:23', '2022-12-30 11:21:23'),
(6, '5th', '1', NULL, '2022-12-30 11:23:24', '2022-12-30 11:23:24'),
(7, '6th', '1', NULL, '2022-12-30 11:45:02', '2022-12-30 11:45:02'),
(8, '7th', '1', NULL, '2022-12-30 11:47:05', '2022-12-30 11:47:05');

-- --------------------------------------------------------

--
-- Table structure for table `austtaa_blood_groups`
--

CREATE TABLE `austtaa_blood_groups` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `blood_group_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `austtaa_blood_groups`
--

INSERT INTO `austtaa_blood_groups` (`id`, `blood_group_name`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'Ab+', '1', NULL, '2022-12-17 04:19:19', '2022-12-17 04:19:19'),
(2, 'O+', '1', NULL, '2022-12-17 04:19:19', '2022-12-17 04:19:19'),
(5, 'Ab-', '1', NULL, '2022-12-30 11:24:47', '2022-12-30 11:24:47');

-- --------------------------------------------------------

--
-- Table structure for table `austtaa_company_names`
--

CREATE TABLE `austtaa_company_names` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `company_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `austtaa_company_names`
--

INSERT INTO `austtaa_company_names` (`id`, `company_name`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'Pakiza Group', '1', NULL, '2022-12-06 05:50:01', '2022-12-06 05:50:01'),
(2, 'Aman Group', '1', NULL, '2022-12-06 05:50:01', '2022-12-06 05:50:01'),
(3, 'Brac Group', '1', NULL, '2022-12-06 08:45:14', '2022-12-06 08:45:14'),
(18, 'Beximco', '1', NULL, '2022-12-30 11:25:28', '2022-12-30 11:25:28'),
(19, 'Swan', '1', NULL, '2022-12-30 11:27:35', '2022-12-30 11:27:35'),
(20, 'Pakiza knit', '1', NULL, '2022-12-30 11:27:35', '2022-12-30 11:27:35');

-- --------------------------------------------------------

--
-- Table structure for table `austtaa_job_sectors`
--

CREATE TABLE `austtaa_job_sectors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `job_sector_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `austtaa_job_sectors`
--

INSERT INTO `austtaa_job_sectors` (`id`, `job_sector_name`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'engineer', '36', NULL, '2022-12-31 06:59:29', '2022-12-31 06:59:29'),
(2, 'hr&admin', '36', NULL, '2022-12-31 06:59:30', '2022-12-31 06:59:30'),
(3, 'Account', '36', NULL, '2022-12-31 06:59:30', '2022-12-31 06:59:30'),
(4, 'Marchendising', '36', NULL, '2023-01-01 06:52:18', '2023-01-01 06:52:18'),
(5, 'update job sctor', '36', NULL, '2023-01-01 06:52:18', '2023-01-01 07:01:39');

-- --------------------------------------------------------

--
-- Table structure for table `austtaa_job_sector_job_sub_sector_maps`
--

CREATE TABLE `austtaa_job_sector_job_sub_sector_maps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `job_sector_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_sub_sector_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `austtaa_job_sector_job_sub_sector_maps`
--

INSERT INTO `austtaa_job_sector_job_sub_sector_maps` (`id`, `job_sector_id`, `job_sub_sector_id`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(28, '3', '24', '1', NULL, '2022-12-31 07:01:42', '2022-12-31 07:01:42');

-- --------------------------------------------------------

--
-- Table structure for table `austtaa_job_sub_sectors`
--

CREATE TABLE `austtaa_job_sub_sectors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `job_sub_sector_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `austtaa_job_sub_sectors`
--

INSERT INTO `austtaa_job_sub_sectors` (`id`, `job_sub_sector_name`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(23, 'new job subsector5', '1', NULL, '2022-12-06 05:50:00', '2022-12-06 05:50:00'),
(24, 'newjob sub sector3', '1', NULL, '2022-12-06 05:50:00', '2022-12-06 05:50:00'),
(25, 'job sub sector update', '36', NULL, '2023-01-01 07:26:54', '2023-01-01 07:27:06');

-- --------------------------------------------------------

--
-- Table structure for table `austtaa_streams`
--

CREATE TABLE `austtaa_streams` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `stream_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `austtaa_streams`
--

INSERT INTO `austtaa_streams` (`id`, `stream_name`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'stream1', '1', NULL, '2022-12-17 04:19:21', '2022-12-17 04:19:21'),
(2, 'strem2', '1', NULL, '2022-12-17 04:19:21', '2022-12-17 04:19:21'),
(3, 'stream3', '1', NULL, '2022-12-17 04:19:21', '2022-12-17 05:13:29');

-- --------------------------------------------------------

--
-- Table structure for table `austta_event_types`
--

CREATE TABLE `austta_event_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `event_type_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `austta_event_types`
--

INSERT INTO `austta_event_types` (`id`, `event_type_name`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'Annual Picnic', NULL, '2022-11-22 04:01:58', '2022-11-30 05:58:11'),
(2, 'Textile Fair', NULL, '2022-11-22 04:02:06', '2022-11-30 05:58:28'),
(3, 'Culturul Get Tother', NULL, '2022-11-30 06:00:03', '2022-11-30 06:00:03'),
(4, 'Sports', NULL, '2022-11-30 11:44:52', '2022-11-30 11:44:52');

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `banner_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `posted_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `banner_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isArchived` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `banner_title`, `posted_by`, `updated_by`, `banner_description`, `isArchived`, `created_at`, `updated_at`) VALUES
(20, 'banner description update', '1', '1', 'asdasdas asdadhada update', 0, '2022-12-27 06:45:20', '2022-12-27 06:45:48');

-- --------------------------------------------------------

--
-- Table structure for table `banner_multiple_images`
--

CREATE TABLE `banner_multiple_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `banner_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `banner_multiple_images`
--

INSERT INTO `banner_multiple_images` (`id`, `banner_id`, `image`, `created_at`, `updated_at`) VALUES
(1, '15', '1671605208ic_round-verified-user.png', '2022-12-21 06:46:48', '2022-12-21 06:46:48'),
(3, '17', '1672122170shane.jpg', '2022-12-27 06:22:50', '2022-12-27 06:22:50'),
(4, '17', '1672122170google news.jpg', '2022-12-27 06:22:50', '2022-12-27 06:22:50'),
(5, '18', '1672122258shane.jpg', '2022-12-27 06:24:18', '2022-12-27 06:24:18'),
(6, '18', '1672122258google news.jpg', '2022-12-27 06:24:18', '2022-12-27 06:24:18'),
(10, '20', '1672123520download job.jpg', '2022-12-27 06:45:20', '2022-12-27 06:45:20'),
(11, '21', '1672123961google news.jpg', '2022-12-27 06:52:41', '2022-12-27 06:52:41'),
(15, '22', '1672130811images.jpg', '2022-12-27 08:46:51', '2022-12-27 08:46:51'),
(16, '22', '1672130836advertisment2.jpg', '2022-12-27 08:47:16', '2022-12-27 08:47:16'),
(17, '22', '1672130836ade]vert1.jpg', '2022-12-27 08:47:16', '2022-12-27 08:47:16');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `department_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `department_name`, `created_by`, `created_at`, `updated_at`) VALUES
(4, 'Dyeing', NULL, '2022-11-30 05:31:57', '2022-11-30 05:32:52'),
(5, 'Merchandising', NULL, '2022-11-30 05:32:05', '2022-11-30 05:32:32'),
(6, 'Knitting', NULL, '2022-11-30 05:33:01', '2022-11-30 05:33:01'),
(7, 'Product Development', NULL, '2022-11-30 05:33:14', '2022-11-30 05:33:14'),
(8, 'IE', NULL, '2022-11-30 12:03:55', '2022-11-30 12:03:55'),
(9, 'Sweing', NULL, '2022-11-30 12:07:58', '2022-11-30 12:07:58'),
(10, 'marchendise', NULL, '2022-12-04 10:58:33', '2022-12-04 10:58:33');

-- --------------------------------------------------------

--
-- Table structure for table `event_multiple_images`
--

CREATE TABLE `event_multiple_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `event_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `event_multiple_images`
--

INSERT INTO `event_multiple_images` (`id`, `event_id`, `image`, `created_at`, `updated_at`) VALUES
(3, '22', '1671604544ade]vert1.jpg', '2022-12-21 06:35:44', '2022-12-21 06:35:44'),
(4, '22', '1671604544event4.jpg', '2022-12-21 06:35:44', '2022-12-21 06:35:44'),
(5, '23', '1671617085ade]vert1.jpg', '2022-12-21 10:04:45', '2022-12-21 10:04:45'),
(6, '23', '1671617085summer.jpg', '2022-12-21 10:04:45', '2022-12-21 10:04:45'),
(7, '24', '1671617140ade]vert1.jpg', '2022-12-21 10:05:40', '2022-12-21 10:05:40'),
(8, '24', '1671617140summer.jpg', '2022-12-21 10:05:40', '2022-12-21 10:05:40'),
(9, '25', '1671617465brac.jpg', '2022-12-21 10:11:05', '2022-12-21 10:11:05'),
(10, '25', '1671617465mithila.jpg', '2022-12-21 10:11:05', '2022-12-21 10:11:05'),
(11, '26', '1671617697mithila.jpg', '2022-12-21 10:14:57', '2022-12-21 10:14:57'),
(12, '26', '1671617697advertisment2.jpg', '2022-12-21 10:14:57', '2022-12-21 10:14:57'),
(13, '27', '1671618252mithila.jpg', '2022-12-21 10:24:12', '2022-12-21 10:24:12'),
(14, '27', '1671618252advertisment2.jpg', '2022-12-21 10:24:12', '2022-12-21 10:24:12'),
(15, '28', '1671620103brac.jpg', '2022-12-21 10:55:03', '2022-12-21 10:55:03'),
(16, '28', '1671620103mithila.jpg', '2022-12-21 10:55:03', '2022-12-21 10:55:03'),
(17, '29', '1671683005download (1).jfif', '2022-12-22 04:23:25', '2022-12-22 04:23:25'),
(18, '29', '1671683005download.jfif', '2022-12-22 04:23:25', '2022-12-22 04:23:25'),
(19, '30', '1671683808event4.jpg', '2022-12-22 04:36:48', '2022-12-22 04:36:48'),
(20, '30', '1671683808event2.jpg', '2022-12-22 04:36:48', '2022-12-22 04:36:48'),
(21, '31', '1671774053google news.jpg', '2022-12-23 05:40:53', '2022-12-23 05:40:53'),
(22, '31', '1671774053price hike.jpg', '2022-12-23 05:40:53', '2022-12-23 05:40:53'),
(23, '32', '1671797766google news.jpg', '2022-12-23 12:16:06', '2022-12-23 12:16:06'),
(24, '32', '1671797766price hike.jpg', '2022-12-23 12:16:06', '2022-12-23 12:16:06'),
(25, '33', '1671797888download job.jpg', '2022-12-23 12:18:08', '2022-12-23 12:18:08'),
(26, '33', '1671797888jon fiar.jpg', '2022-12-23 12:18:08', '2022-12-23 12:18:08'),
(27, '34', '1671798114google news.jpg', '2022-12-23 12:21:54', '2022-12-23 12:21:54'),
(28, '34', '1671798114price hike.jpg', '2022-12-23 12:21:54', '2022-12-23 12:21:54'),
(29, '35', '1671798165google news.jpg', '2022-12-23 12:22:45', '2022-12-23 12:22:45'),
(30, '35', '1671798165price hike.jpg', '2022-12-23 12:22:45', '2022-12-23 12:22:45'),
(31, '36', '1671798404google news.jpg', '2022-12-23 12:26:44', '2022-12-23 12:26:44'),
(32, '36', '1671798404price hike.jpg', '2022-12-23 12:26:44', '2022-12-23 12:26:44'),
(33, '37', '1671798498price hike.jpg', '2022-12-23 12:28:18', '2022-12-23 12:28:18'),
(34, '37', '1671798498download job.jpg', '2022-12-23 12:28:18', '2022-12-23 12:28:18'),
(35, '38', '1671812950google news.jpg', '2022-12-23 16:29:10', '2022-12-23 16:29:10'),
(36, '38', '1671812950price hike.jpg', '2022-12-23 16:29:10', '2022-12-23 16:29:10'),
(37, '39', '1671944841google news.jpg', '2022-12-25 05:07:21', '2022-12-25 05:07:21'),
(38, '39', '1671944841price hike.jpg', '2022-12-25 05:07:21', '2022-12-25 05:07:21'),
(39, '40', '1671948813vacanyc.jpg', '2022-12-25 06:13:33', '2022-12-25 06:13:33'),
(40, '40', '1671948813download (1).jpg', '2022-12-25 06:13:33', '2022-12-25 06:13:33'),
(41, '41', '1671949133vacanyc.jpg', '2022-12-25 06:18:53', '2022-12-25 06:18:53'),
(42, '41', '1671949133download (1).jpg', '2022-12-25 06:18:53', '2022-12-25 06:18:53'),
(43, '42', '1671949193vacanyc.jpg', '2022-12-25 06:19:53', '2022-12-25 06:19:53'),
(44, '42', '1671949193download (1).jpg', '2022-12-25 06:19:53', '2022-12-25 06:19:53'),
(45, '43', '1671949237vacanyc.jpg', '2022-12-25 06:20:37', '2022-12-25 06:20:37'),
(46, '43', '1671949237download (1).jpg', '2022-12-25 06:20:37', '2022-12-25 06:20:37'),
(47, '44', '1671949289vacanyc.jpg', '2022-12-25 06:21:29', '2022-12-25 06:21:29'),
(48, '44', '1671949289download (1).jpg', '2022-12-25 06:21:29', '2022-12-25 06:21:29'),
(49, '45', '1671955154price hike.jpg', '2022-12-25 07:59:14', '2022-12-25 07:59:14'),
(50, '45', '1671955154download job.jpg', '2022-12-25 07:59:14', '2022-12-25 07:59:14'),
(51, '46', '1671955175price hike.jpg', '2022-12-25 07:59:35', '2022-12-25 07:59:35'),
(52, '46', '1671955175download job.jpg', '2022-12-25 07:59:35', '2022-12-25 07:59:35'),
(53, '47', '1671955220price hike.jpg', '2022-12-25 08:00:20', '2022-12-25 08:00:20'),
(54, '47', '1671955220download job.jpg', '2022-12-25 08:00:20', '2022-12-25 08:00:20'),
(55, '48', '1671955366download job.jpg', '2022-12-25 08:02:46', '2022-12-25 08:02:46'),
(56, '48', '1671955366Argentina-v-Croatia-Semi-Final-FIFA-World-Cup-Qatar-2022.webp', '2022-12-25 08:02:46', '2022-12-25 08:02:46'),
(57, '49', '1671958110vacanyc.jpg', '2022-12-25 08:48:30', '2022-12-25 08:48:30'),
(58, '49', '1671958110download (1).jpg', '2022-12-25 08:48:30', '2022-12-25 08:48:30'),
(59, '50', '1671958232price hike - Copy.jpg', '2022-12-25 08:50:32', '2022-12-25 08:50:32'),
(60, '50', '1671958232download job.jpg', '2022-12-25 08:50:32', '2022-12-25 08:50:32'),
(64, '51', '1672132539fresh-pineapple-tea-ad-banner-260nw-2021806958.webp', '2022-12-27 09:15:39', '2022-12-27 09:15:39'),
(65, '51', '1672133993price hike.jpg', '2022-12-27 09:39:53', '2022-12-27 09:39:53'),
(66, '51', '1672133993download job.jpg', '2022-12-27 09:39:53', '2022-12-27 09:39:53'),
(67, '52', '1672138747shane.jpg', '2022-12-27 10:59:07', '2022-12-27 10:59:07'),
(68, '52', '1672138747download job.jpg', '2022-12-27 10:59:07', '2022-12-27 10:59:07'),
(69, '53', '1672139023download job.jpg', '2022-12-27 11:03:43', '2022-12-27 11:03:43'),
(70, '53', '1672139023jon fiar.jpg', '2022-12-27 11:03:43', '2022-12-27 11:03:43'),
(71, '54', '1672139560shane.jpg', '2022-12-27 11:12:40', '2022-12-27 11:12:40'),
(72, '54', '1672139560download job.jpg', '2022-12-27 11:12:40', '2022-12-27 11:12:40'),
(73, '55', '1672139728download job.jpg', '2022-12-27 11:15:28', '2022-12-27 11:15:28'),
(74, '55', '1672139728download dddd.jpg', '2022-12-27 11:15:28', '2022-12-27 11:15:28'),
(75, '56', '1672140113download job.jpg', '2022-12-27 11:21:53', '2022-12-27 11:21:53'),
(76, '56', '1672140113jon fiar.jpg', '2022-12-27 11:21:53', '2022-12-27 11:21:53'),
(77, '57', '1672140431price hike - Copy.jpg', '2022-12-27 11:27:11', '2022-12-27 11:27:11'),
(78, '57', '1672140431price hike.jpg', '2022-12-27 11:27:11', '2022-12-27 11:27:11'),
(79, '58', '1672140539jon fiar.jpg', '2022-12-27 11:28:59', '2022-12-27 11:28:59'),
(80, '58', '1672140539Argentina-v-Croatia-Semi-Final-FIFA-World-Cup-Qatar-2022.webp', '2022-12-27 11:28:59', '2022-12-27 11:28:59'),
(81, '59', '1672141640price hike - Copy.jpg', '2022-12-27 11:47:20', '2022-12-27 11:47:20'),
(82, '59', '1672141640download job.jpg', '2022-12-27 11:47:20', '2022-12-27 11:47:20'),
(83, '60', '1672141677price hike - Copy.jpg', '2022-12-27 11:47:57', '2022-12-27 11:47:57'),
(84, '60', '1672141677download job.jpg', '2022-12-27 11:47:57', '2022-12-27 11:47:57'),
(85, '61', '1672142462shane.jpg', '2022-12-27 12:01:02', '2022-12-27 12:01:02'),
(86, '61', '1672142462download job.jpg', '2022-12-27 12:01:02', '2022-12-27 12:01:02'),
(87, '62', '1672142914download job.jpg', '2022-12-27 12:08:34', '2022-12-27 12:08:34'),
(88, '62', '1672142914jon fiar.jpg', '2022-12-27 12:08:34', '2022-12-27 12:08:34'),
(89, '63', '1672461748golam.jpg', '2022-12-31 04:42:28', '2022-12-31 04:42:28'),
(90, '63', '1672461748rakib2.jpg', '2022-12-31 04:42:28', '2022-12-31 04:42:28'),
(91, '64', '1672828737images (2).jpg', '2023-01-04 10:38:57', '2023-01-04 10:38:57'),
(92, '64', '1672828737fresh-pineapple-tea-ad-banner-260nw-2021806958.webp', '2023-01-04 10:38:57', '2023-01-04 10:38:57'),
(93, '65', '1673172403advertisment2.jpg', '2023-01-08 10:06:43', '2023-01-08 10:06:43'),
(94, '65', '1673172403ade]vert1.jpg', '2023-01-08 10:06:43', '2023-01-08 10:06:43');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `global_notifications`
--

CREATE TABLE `global_notifications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `notification_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notification_body` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `priority` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `for_all_users` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `for_admin` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `for_alumni` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `for_staff` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `for_moderator` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notification_both` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mail_notification` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `push_notification` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `posted_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `global_notifications`
--

INSERT INTO `global_notifications` (`id`, `notification_title`, `notification_body`, `priority`, `for_all_users`, `for_admin`, `for_alumni`, `for_staff`, `for_moderator`, `notification_both`, `mail_notification`, `push_notification`, `posted_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(13, 'Our Ceremony will be held on 01-12-2023', 'Please Dear Concern,We have a great news all of you. Our Md sir will seat with us. So we have decided to take a seat in 01-12-2023.\nThank You', 'Emergency', '0', '1', '0', '0', '1', '1', '0', '0', NULL, NULL, '2022-12-29 04:39:14', '2022-12-29 04:39:14'),
(14, 'hello laravel', 'laravel developer', 'Emergency', '1', '0', '0', '0', '0', '1', '0', '0', NULL, NULL, '2022-12-31 09:44:09', '2022-12-31 09:44:09'),
(15, 'title for moderator and admin', 'body for moderator and admin', 'Normal', '0', '1', '0', '0', '1', '1', '0', '0', NULL, NULL, '2022-12-31 10:49:32', '2022-12-31 10:49:32'),
(16, 'hello for all', 'hello for description', 'Emergency', '0', '1', '0', '0', '0', '1', '0', '0', NULL, NULL, '2023-01-03 04:32:55', '2023-01-03 04:32:55'),
(17, 'sadas', 'adas', 'Emergency', '0', '1', '1', '1', '1', '1', '0', '1', '1', '1', '2023-01-03 04:33:42', '2023-01-03 04:33:42'),
(18, 'oasodoasd', 'asdasd', 'Emergency', '1', '0', '0', '0', '0', '1', '0', '0', NULL, NULL, '2023-01-03 04:37:11', '2023-01-03 04:37:11'),
(19, 'laravel', 'laravel', NULL, '0', '1', '0', '0', '0', '0', '0', '1', NULL, NULL, '2023-01-03 12:22:11', '2023-01-03 12:22:11'),
(20, 'sda', 'asda', 'Emergency', '0', '1', '0', '0', '0', '0', '0', '1', NULL, NULL, '2023-01-03 12:23:27', '2023-01-03 12:23:27'),
(21, 'as', 'asd', 'Emergency', '1', '0', '0', '0', '0', '1', '0', '0', NULL, NULL, '2023-01-03 12:24:17', '2023-01-03 12:24:17'),
(22, 'rter', 'ddsf', 'Emergency', '0', '0', '1', '0', '0', '1', '0', '0', NULL, NULL, '2023-01-03 12:24:37', '2023-01-03 12:24:37'),
(23, 'wqe', 'qweq', 'Emergency', '0', '1', '0', '0', '0', '1', '0', '0', NULL, NULL, '2023-01-03 12:25:01', '2023-01-03 12:25:01'),
(24, 'sadas', 'adas', 'Emergency', '0', '0', '0', '0', '1', '1', '0', '1', '1', '1', '2023-01-04 03:20:47', '2023-01-04 03:20:47'),
(25, 'sadas', 'adas', 'Emergency', '0', '0', '0', '0', '1', '0', '1', '0', '1', '1', '2023-01-04 03:23:11', '2023-01-04 03:23:11'),
(26, 'sadas', 'adas', 'Emergency', '0', '1', '0', '0', '1', '0', '1', '0', '1', '1', '2023-01-04 03:37:40', '2023-01-04 03:37:40');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_posts`
--

CREATE TABLE `job_posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `job_unique_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `department_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_link` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `posted_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_location` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isPublished` tinyint(1) NOT NULL DEFAULT 1,
  `isArchived` tinyint(1) NOT NULL DEFAULT 0,
  `application_deadline` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job_posts`
--

INSERT INTO `job_posts` (`id`, `job_unique_id`, `company_name`, `job_type`, `department_id`, `job_title`, `job_description`, `job_link`, `image`, `posted_by`, `updated_by`, `job_location`, `isPublished`, `isArchived`, `application_deadline`, `created_at`, `updated_at`) VALUES
(7, '1212713', 'Pakiza Technovation Ltd', '3', '10', 'Full Stack Developer', '<ul><li>Keep It Simple And Original. ...</li><li>Clarify Necessary Skills From Desired Skills. ...</li><li>Get Insight From Current Employees. ...</li><li>Consider Three Specific Factors. ...</li><li>Use Inclusive Language. ...</li><li>Provide Clear Expectations. ...</li><li>Update Job Descriptions. ...</li><li>Make It Personal And On Brand.</li></ul>', NULL, '1670832759.jpg', '1', NULL, 'on_site', 1, 0, '2022-12-28', '2022-12-12 08:12:39', '2022-12-12 08:12:39'),
(8, '1212472', 'Sqaure Group Ltd', '4', '9', 'Google Developer', '<ul><li>Keep It Simple And Original. ...</li><li>Clarify Necessary Skills From Desired Skills. ...</li><li>Get Insight From Current Employees. ...</li><li>Consider Three Specific Factors. ...</li><li>Use Inclusive Language. ...</li><li>Provide Clear Expectations. ...</li><li>Update Job Descriptions. ...</li><li>Make It Personal And On Brand.</li></ul>', NULL, '1670833744.jfif', '1', NULL, 'remote', 1, 0, '2022-12-26', '2022-12-12 08:29:04', '2022-12-12 08:29:04'),
(9, '1212853', 'Brain Station 23', '6', '9', 'React Native Developer', '<div class=\"co8aDb\" aria-level=\"3\" role=\"heading\" style=\"margin-bottom: 12px; font-family: &quot;Google Sans&quot;, arial, sans-serif; color: rgb(32, 33, 36); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 16px;\">The must-have skills for React Native Developer</div><div class=\"RqBzHd\" style=\"padding: 0px 20px; color: rgb(32, 33, 36); font-family: arial, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 16px;\"><ul class=\"i8Z77e\" style=\"margin: 0px; padding: 0px;\"><li class=\"TrT0Xe\" style=\"margin: 0px 0px 4px; padding: 0px; list-style-type: disc;\">Excellent knowledge of JavaScript. ...</li><li class=\"TrT0Xe\" style=\"font-size: 16px; margin: 0px 0px 4px; padding: 0px; list-style-type: disc;\">Knowledge of basic React assumptions. ...</li><li class=\"TrT0Xe\" style=\"font-size: 16px; margin: 0px 0px 4px; padding: 0px; list-style-type: disc;\">Experience with Android and iOS development. ...</li><li class=\"TrT0Xe\" style=\"font-size: 16px; margin: 0px 0px 4px; padding: 0px; list-style-type: disc;\">Get world-class developers in 1 week. ...</li><li class=\"TrT0Xe\" style=\"font-size: 16px; margin: 0px 0px 4px; padding: 0px; list-style-type: disc;\">Familiarity with useful tech tools. ...</li><li class=\"TrT0Xe\" style=\"font-size: 16px; margin: 0px 0px 4px; padding: 0px; list-style-type: disc;\">Writing clear code.</li></ul></div>', NULL, '1670841929.jpg', '1', NULL, 'on_site', 1, 0, '2022-12-28', '2022-12-12 10:45:29', '2022-12-12 10:46:05'),
(10, '1212534', NULL, '3', '9', 'swing merchandiser', '<ul><li>commercial awareness.</li><li>confidence.</li><li>able to cope with pressure.</li><li>teamworking skills.</li><li>communication skills.</li><li>interpersonal skills.</li><li>leadership skills.</li><li>strong numerical and analytical skills.</li></ul>', NULL, '1670842457.jpg', '1', NULL, 'remote', 0, 1, '2022-12-31', '2022-12-12 10:54:17', '2022-12-15 07:13:54'),
(11, '1212495', 'Beximco Group', '6', NULL, 'contract Esupor developer', '<div class=\"wDYxhc\" data-md=\"61\" lang=\"en-BD\" style=\"clear: none; padding-top: 0px; border-radius: 8px; padding-left: 0px; padding-right: 0px; color: rgb(32, 33, 36); font-family: arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><div class=\"LGOjhe\" data-attrid=\"wa:/description\" aria-level=\"3\" role=\"heading\" data-hveid=\"CB4QAQ\" style=\"overflow: hidden; padding-bottom: 20px;\"><span class=\"ILfuVd\" lang=\"en\" style=\"font-size: 16px; line-height: 24px;\"><span class=\"hgKElc\" style=\"padding: 0px 8px 0px 0px;\">A contract developer is<span>&nbsp;</span><strong>someone who develops applications for a client on a short-term contract</strong>. Unlike a regular developer, they usually are not employed full-time at a company but sign on for a temporary contract, as long as it takes to finish a project.</span></span><span class=\"kX21rb ZYHQ7e\" style=\"color: rgb(112, 117, 122); padding-right: 0px; display: inline-block; font-size: 12px; line-height: 1.34; white-space: nowrap;\">Sep 9, 2022</span></div></div><div class=\"g\" style=\"font-family: arial, sans-serif; font-size: 14px; line-height: 1.58; text-align: left; width: 600px; margin: 0px; clear: both; padding-bottom: 0px; color: rgb(32, 33, 36); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><div lang=\"en\" data-hveid=\"CBoQAA\" data-ved=\"2ahUKEwi1puD49vP7AhXF2DgGHWEJAbsQFSgAegQIGhAA\"><div class=\"tF2Cxc\" style=\"position: relative; clear: both; padding-bottom: 0px;\"><br class=\"Apple-interchange-newline\"></div></div></div>', NULL, '1670842977.jpg', '1', NULL, 'remote', 1, 0, '2022-12-28', '2022-12-12 11:02:57', '2022-12-12 11:02:57'),
(12, '1212659', 'Austta', '3', '6', 'Aussta Swing Developer', '<p><span style=\"color: rgb(77, 81, 86); font-family: arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">Knitting is a method by which yarn is manipulated to create a textile, or fabric. It is used to create many types of garments. Knitting may be done by hand or by machine. Knitting creates stitches: loops of yarn in a row, either flat or in the round</span></p>', NULL, '1670843056.jpg', '1', NULL, 'on_site', 1, 0, NULL, '2022-12-12 11:04:16', '2022-12-12 11:04:16'),
(13, '1212715', 'Sqaure Group Ltd', '4', '8', 'What Is Knitting', '<div style=\"color: rgb(32, 33, 36); font-family: arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><div class=\"Lnn9rb\" style=\"display: flex;\"><div class=\"DyytQ\" style=\"padding-right: 0.5em;\">1.</div><div class=\"d5cZ5c OSrXXb\" style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap; word-break: break-all;\">Cast on 15-20 stitches using the Long-Tail Cast On.</div></div></div><div style=\"color: rgb(32, 33, 36); font-family: arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><div class=\"Lnn9rb\" style=\"display: flex;\"><div class=\"DyytQ\" style=\"padding-right: 0.5em;\">2.</div><div class=\"d5cZ5c OSrXXb\" style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap; word-break: break-all;\">Knit all stitches across the row.</div></div></div><div style=\"color: rgb(32, 33, 36); font-family: arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><div class=\"Lnn9rb\" style=\"display: flex;\"><div class=\"DyytQ\" style=\"padding-right: 0.5em;\">3.</div><div class=\"d5cZ5c OSrXXb\" style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap; word-break: break-all;\">Turn your work, and knit the next row.</div></div></div>', NULL, '1670843706.jpg', '1', NULL, 'on_site', 1, 0, '2022-12-29', '2022-12-12 11:15:06', '2022-12-15 07:00:42'),
(15, '1215218', 'Pakiza Textile', '3', '5', 'Marchending job title', '<p><span style=\"color: rgb(32, 33, 36); font-family: arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">A job description template is<span>&nbsp;</span></span><strong style=\"color: rgb(32, 33, 36); font-family: arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\">a reusable model that can be tailored to detail the specific requirements, responsibilities, job duties, and skills required to perform a role</strong><span style=\"color: rgb(32, 33, 36); font-family: arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">. It typically includes a list of common daily tasks, equipment or tools used, who the role reports to, and the overall goals of th</span><br></p>', NULL, '1671088542.jpg', '1', '1', 'on_site', 1, 0, '2022-12-31', '2022-12-15 07:15:42', '2023-01-04 09:35:28'),
(23, '1231566', 'asfa', '6', '10', 'adfsd', '<p>asfasf</p>', NULL, '1672485044.webp', '1', NULL, 'on_site', 1, 0, '2022-12-29', '2022-12-31 11:10:44', '2023-01-04 06:01:44'),
(25, '0104514', 'Fakir Knit Ware Industries Limited', '4', '10', 'Site Realibility Engineer Google', '<p>Fakir Knit Ware Industries Limited</p>', NULL, '1672806725.jpg', '36', NULL, 'remote', 1, 0, '2023-01-27', '2023-01-04 04:32:05', '2023-01-04 04:32:05');

-- --------------------------------------------------------

--
-- Table structure for table `job_types`
--

CREATE TABLE `job_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job_types`
--

INSERT INTO `job_types` (`id`, `type_name`, `created_by`, `created_at`, `updated_at`) VALUES
(3, 'Full Time', NULL, '2022-11-30 05:30:54', '2022-11-30 05:30:54'),
(4, 'Part Time', NULL, '2022-11-30 05:31:05', '2022-11-30 05:31:05'),
(6, 'Contractual', NULL, '2022-12-12 08:11:18', '2022-12-12 08:11:18'),
(7, 'Contactual', NULL, '2022-12-20 11:56:10', '2022-12-20 11:56:10');

-- --------------------------------------------------------

--
-- Table structure for table `login_email_otps`
--

CREATE TABLE `login_email_otps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `otp` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `login_email_otps`
--

INSERT INTO `login_email_otps` (`id`, `user_id`, `otp`, `created_at`, `updated_at`) VALUES
(1, '1', '60073', '2022-11-22 03:55:32', '2022-11-22 03:55:32'),
(2, '2', '8553', '2022-11-22 09:31:06', '2022-11-22 09:31:06'),
(3, '3', '24654', '2022-11-23 10:55:27', '2022-11-23 10:55:27'),
(4, '4', '37439', '2022-11-30 04:23:36', '2022-11-30 04:23:36'),
(5, '5', '16274', '2022-11-30 10:09:07', '2022-11-30 10:09:07'),
(6, '6', '36407', '2022-11-30 10:24:51', '2022-11-30 10:24:51'),
(7, '7', '27228', '2022-11-30 10:50:00', '2022-11-30 10:50:00'),
(8, '8', '77225', '2022-12-06 07:07:54', '2022-12-06 07:07:54'),
(9, '9', '94331', '2022-12-06 07:10:18', '2022-12-06 07:10:18'),
(10, '10', '89472', '2022-12-06 07:10:57', '2022-12-06 07:10:57'),
(11, '13', '62168', '2022-12-06 07:25:42', '2022-12-06 07:25:42'),
(12, '15', '82196', '2022-12-06 08:17:53', '2022-12-06 08:17:53'),
(13, '16', '48031', '2022-12-06 08:24:58', '2022-12-06 08:24:58'),
(14, '17', '15012', '2022-12-06 08:26:00', '2022-12-06 08:26:00'),
(15, '18', '93703', '2022-12-06 08:27:34', '2022-12-06 08:27:34'),
(16, '19', '83169', '2022-12-11 04:22:12', '2022-12-11 04:22:12'),
(17, '20', '45477', '2022-12-15 06:59:16', '2022-12-15 06:59:16'),
(18, '20', '70684', '2022-12-15 08:48:15', '2022-12-15 08:48:15'),
(19, '21', '16777', '2022-12-18 11:52:41', '2022-12-18 11:52:41'),
(20, '22', '67815', '2022-12-18 11:54:47', '2022-12-18 11:54:47'),
(21, '23', '681', '2022-12-26 06:17:11', '2022-12-26 06:17:11'),
(22, '24', '86196', '2022-12-26 06:26:03', '2022-12-26 06:26:03'),
(23, '25', '15391', '2022-12-26 06:38:30', '2022-12-26 06:38:30'),
(24, '30', '26284', '2022-12-28 04:59:59', '2022-12-28 04:59:59'),
(25, '31', '89912', '2022-12-28 05:43:58', '2022-12-28 05:43:58'),
(26, '32', '55541', '2022-12-28 06:14:39', '2022-12-28 06:14:39'),
(27, '33', '44363', '2022-12-28 09:18:43', '2022-12-28 09:18:43'),
(28, '34', '7922', '2022-12-30 06:18:26', '2022-12-30 06:18:26'),
(29, '35', '640', '2022-12-30 06:23:07', '2022-12-30 06:23:07'),
(30, '36', '41831', '2022-12-31 05:07:11', '2022-12-31 05:07:11'),
(31, '37', '20364', '2022-12-31 05:21:51', '2022-12-31 05:21:51'),
(32, '38', '94378', '2022-12-31 10:48:21', '2022-12-31 10:48:21');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(159, '2014_10_12_000000_create_users_table', 1),
(160, '2014_10_12_100000_create_password_resets_table', 1),
(161, '2019_08_19_000000_create_failed_jobs_table', 1),
(162, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(163, '2022_10_03_055847_create_login_email_otps_table', 1),
(164, '2022_10_04_101651_create_post_types_table', 1),
(165, '2022_10_05_090713_create_posts_table', 1),
(166, '2022_10_11_121830_create_job_types_table', 1),
(167, '2022_10_11_122613_create_job_posts_table', 1),
(168, '2022_10_17_152239_create_departments_table', 1),
(169, '2022_10_30_123502_create_aussta_events_table', 1),
(170, '2022_10_31_100747_create_austta_event_types_table', 1),
(172, '2022_11_10_121432_create_advertisements_table', 1),
(174, '2022_11_25_191144_create_jobs_table', 2),
(175, '2022_11_26_154815_create_article_blog_categories_table', 2),
(176, '2022_11_26_221755_create_article_blog_sub_categories_table', 2),
(177, '2022_11_27_224237_create_article_blogs_table', 3),
(178, '2022_11_29_095047_create_banners_table', 4),
(182, '2022_12_01_141714_create_advertisement_multiple_images_table', 5),
(183, '2022_12_02_121702_create_notice_news_categories_table', 5),
(184, '2022_12_02_123317_create_notice_news_sub_categories_table', 6),
(185, '2022_12_02_145859_create_notice_news_table', 7),
(186, '2022_12_04_174718_create_austtaa_job_sectors_table', 8),
(187, '2022_12_04_174930_create_austtaa_job_sub_sectors_table', 9),
(188, '2022_12_05_105741_create_austtaa_job_sector_job_sub_sector_maps_table', 10),
(189, '2022_12_05_132320_create_austtaa_company_names_table', 11),
(190, '2022_12_06_123021_create_user_professional_infos_table', 12),
(191, '2022_12_06_123750_create_user_educational_infos_table', 13),
(192, '2022_12_13_152719_create_vlog_categories_table', 14),
(193, '2022_12_13_163906_create_vlogs_table', 15),
(194, '2022_12_16_110921_create_austtaa_batches_table', 16),
(195, '2022_12_16_111559_create_austtaa_blood_groups_table', 16),
(196, '2022_12_16_111843_create_austtaa_streams_table', 16),
(197, '2022_12_21_110913_create_event_multiple_images_table', 17),
(198, '2022_12_21_124303_create_banner_multiple_images_table', 18),
(201, '2022_11_06_105613_create_notifications_table', 19),
(202, '2022_12_23_232443_create_permission_tables', 20),
(203, '2022_12_28_132044_create_global_notifications_table', 21);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(10, 'App\\Models\\User', 31),
(10, 'App\\Models\\User', 36),
(11, 'App\\Models\\User', 24),
(11, 'App\\Models\\User', 25),
(11, 'App\\Models\\User', 32),
(11, 'App\\Models\\User', 33),
(11, 'App\\Models\\User', 37),
(11, 'App\\Models\\User', 38),
(12, 'App\\Models\\User', 35),
(13, 'App\\Models\\User', 34);

-- --------------------------------------------------------

--
-- Table structure for table `notice_news`
--

CREATE TABLE `notice_news` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subcategory_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notice_news_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `posted_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notice_news_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notice_news_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isArchived` tinyint(1) NOT NULL DEFAULT 0,
  `isPublished` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notice_news`
--

INSERT INTO `notice_news` (`id`, `category_id`, `subcategory_id`, `notice_news_title`, `posted_by`, `updated_by`, `notice_news_description`, `notice_news_image`, `isArchived`, `isPublished`, `created_at`, `updated_at`) VALUES
(1, '4', '6', '1st notice title update', '1', '1', '<p>updated decription</p>', '1669972513.jfif', 0, 1, '2022-12-02 09:15:13', '2022-12-15 05:42:39'),
(3, '2', '2', 'check titl2', '1', '1', '<p>asdasda</p>', '1670048749.jpg', 0, 1, '2022-12-03 06:25:49', '2022-12-03 06:25:49'),
(4, '4', '6', 'Pakiza Job News are awsome', '1', '1', '<p><strong><br></strong><strong>Pakiza Job News are awsome</strong></p><p>Pakiza Job News are awsome</p><p><strong><br></strong></p>', '1671015654.jpg', 0, 1, '2022-12-14 11:00:54', '2022-12-14 11:00:54'),
(6, '4', '7', 'asdasd', '36', '36', 'undefined', '1671089074.jpg', 1, 0, '2022-12-15 07:24:34', '2023-01-05 05:30:11');

-- --------------------------------------------------------

--
-- Table structure for table `notice_news_categories`
--

CREATE TABLE `notice_news_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notice_news_categories`
--

INSERT INTO `notice_news_categories` (`id`, `category_name`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(3, 'Notice', '1', NULL, '2022-12-02 08:47:43', '2022-12-15 07:04:25'),
(4, 'News', '1', NULL, '2022-12-14 10:59:36', '2022-12-14 10:59:36'),
(5, 'Announcement', '1', NULL, '2022-12-25 09:50:06', '2022-12-25 09:50:06');

-- --------------------------------------------------------

--
-- Table structure for table `notice_news_sub_categories`
--

CREATE TABLE `notice_news_sub_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subcategory_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notice_news_sub_categories`
--

INSERT INTO `notice_news_sub_categories` (`id`, `category_id`, `subcategory_name`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(7, '4', 'Austtaa News', '1', NULL, '2022-12-15 07:06:14', '2022-12-15 07:06:14'),
(8, '4', 'Pakiza Job News', '1', NULL, '2022-12-15 07:06:27', '2022-12-15 07:06:27'),
(9, '3', 'Austta Notice', '1', NULL, '2022-12-15 07:07:10', '2022-12-15 07:07:10'),
(10, '5', 'General Announcement', '1', NULL, '2022-12-25 09:50:22', '2022-12-25 09:50:22'),
(11, '5', 'Critical Announcement', '1', NULL, '2022-12-25 09:50:37', '2022-12-25 09:50:37');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notifiable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_id` bigint(20) UNSIGNED NOT NULL,
  `data` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `posted_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notification_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `type`, `notifiable_type`, `notifiable_id`, `data`, `title`, `body`, `posted_by`, `notification_type`, `read_at`, `created_at`, `updated_at`) VALUES
('03f9d582-51de-4d8e-b568-190808728ecb', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 1, '{\"event_unique_id\":\"122768110\",\"event_type_id\":\"3\",\"event_title\":\"afdhf\",\"event_fee\":\"500\",\"updated_by\":null,\"event_description\":\"<p>hahgsdhga<\\/p>\",\"contact_person\":\"1\",\"event_date\":\"2022-12-29\",\"showBanner\":\"0\",\"payment_type\":\"1\",\"posted_by\":\"1\",\"event_time\":\"Tue, 27 Dec 2022 00:29:00 GMT\",\"priority\":\"high\",\"notification_type\":\"event_type\",\"updated_at\":\"2022-12-27T11:27:11.000000Z\",\"created_at\":\"2022-12-27T11:27:11.000000Z\",\"id\":57}', NULL, NULL, '1', 'event_type', '2022-12-31 05:00:15', '2022-12-27 11:27:15', '2022-12-31 05:00:15'),
('0d269015-8b2c-4601-b2bc-a28f205591ec', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 1, '{\"event_unique_id\":\"122750729\",\"event_type_id\":\"3\",\"event_title\":\"buuasasdas\",\"event_fee\":\"500\",\"updated_by\":null,\"event_description\":\"<p>asdasd<\\/p>\",\"contact_person\":\"1\",\"event_date\":\"2023-01-06\",\"showBanner\":\"1\",\"payment_type\":\"1\",\"posted_by\":\"1\",\"event_time\":\"Mon, 26 Dec 2022 23:24:00 GMT\",\"priority\":\"high\",\"notification_type\":\"event_type\",\"updated_at\":\"2022-12-27T12:08:34.000000Z\",\"created_at\":\"2022-12-27T12:08:34.000000Z\",\"id\":62}', NULL, NULL, '1', 'event_type', '2022-12-31 05:00:15', '2022-12-27 12:08:38', '2022-12-31 05:00:15'),
('0df0123f-1cca-4219-b2e5-8d584ae994a1', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 1, '{\"event_unique_id\":\"122727864\",\"event_type_id\":\"3\",\"event_title\":\"uuu\",\"event_fee\":\"600\",\"updated_by\":null,\"event_description\":\"<p>uuuuda<\\/p>\",\"contact_person\":\"1,20\",\"event_date\":\"2022-12-30\",\"showBanner\":\"1\",\"payment_type\":\"1\",\"posted_by\":\"1\",\"event_time\":\"Tue, 27 Dec 2022 00:31:00 GMT\",\"priority\":\"high\",\"notification_type\":\"event_type\",\"updated_at\":\"2022-12-27T10:59:07.000000Z\",\"created_at\":\"2022-12-27T10:59:07.000000Z\",\"id\":52}', NULL, NULL, '1', 'event_type', '2022-12-31 05:00:15', '2022-12-27 10:59:14', '2022-12-31 05:00:15'),
('18e5302d-e0fb-45c3-80d6-6a4226cbf061', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 1, '{\"event_unique_id\":\"122773968\",\"event_type_id\":\"3\",\"event_title\":\"sgfdf\",\"event_fee\":\"600\",\"updated_by\":null,\"event_description\":\"<p>sdfsd<\\/p>\",\"contact_person\":\"1\",\"event_date\":\"2022-12-29\",\"showBanner\":\"0\",\"payment_type\":\"1\",\"posted_by\":\"1\",\"event_time\":\"Mon, 26 Dec 2022 23:23:00 GMT\",\"priority\":\"normal\",\"notification_type\":\"event_type\",\"updated_at\":\"2022-12-27T11:15:28.000000Z\",\"created_at\":\"2022-12-27T11:15:28.000000Z\",\"id\":55}', NULL, NULL, '1', 'event_type', '2022-12-31 05:00:15', '2022-12-27 11:15:32', '2022-12-31 05:00:15'),
('254b923f-c10e-4e3b-a63b-3fdd27166d5b', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 22, '{\"event_unique_id\":\"122588118\",\"event_type_id\":\"4\",\"event_title\":\"jamela3357\",\"event_fee\":\"50\",\"updated_by\":null,\"event_description\":\"<p>jamela ase<\\/p>\",\"contact_person\":\"1,21,22\",\"event_date\":\"2022-12-22\",\"showBanner\":\"0\",\"payment_type\":\"1\",\"posted_by\":\"1\",\"event_time\":\"Sun, 25 Dec 2022 00:29:00 GMT\",\"priority\":\"normal\",\"updated_at\":\"2022-12-25T06:21:29.000000Z\",\"created_at\":\"2022-12-25T06:21:29.000000Z\",\"id\":44}', NULL, NULL, NULL, NULL, NULL, '2022-12-25 06:21:36', '2022-12-25 06:21:36'),
('292497d1-73cc-4a5f-985b-f99dcddef913', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 1, '{\"event_unique_id\":\"122759428\",\"event_type_id\":\"4\",\"event_title\":\"yasdytastydasda\",\"event_fee\":\"500\",\"updated_by\":null,\"event_description\":\"<p>ytatsdtas<\\/p>\",\"contact_person\":\"1\",\"event_date\":\"2022-12-21\",\"showBanner\":\"0\",\"payment_type\":\"1\",\"posted_by\":\"1\",\"event_time\":\"Mon, 26 Dec 2022 18:01:00 GMT\",\"priority\":\"high\",\"notification_type\":\"event_type\",\"updated_at\":\"2022-12-27T11:47:57.000000Z\",\"created_at\":\"2022-12-27T11:47:57.000000Z\",\"id\":60}', NULL, NULL, '1', 'event_type', '2022-12-31 05:00:15', '2022-12-27 11:48:01', '2022-12-31 05:00:15'),
('30208bb8-fd9c-44ae-ab2f-647568c506b6', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 1, '{\"posted_by\":null,\"data\":null}', NULL, NULL, '1', NULL, '2022-12-31 05:00:15', '2022-12-25 08:02:50', '2022-12-31 05:00:15'),
('3425505b-bb1b-4ba5-aeee-620b802d86ff', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 36, '{\"event_unique_id\":\"010443218\",\"event_type_id\":\"4\",\"event_title\":\"sdxvxZ\",\"event_fee\":\"2000\",\"updated_by\":null,\"event_description\":\"<p>ZXZXG<\\/p>\",\"contact_person\":\"36\",\"event_date\":\"2023-01-31\",\"showBanner\":\"1\",\"payment_type\":\"1\",\"posted_by\":\"1\",\"event_time\":\"Tue, 03 Jan 2023 18:06:00 GMT\",\"priority\":\"high\",\"notification_type\":\"event_type\",\"updated_at\":\"2023-01-04T10:38:57.000000Z\",\"created_at\":\"2023-01-04T10:38:57.000000Z\",\"id\":64}', NULL, NULL, '36', 'event_type', '2023-01-05 09:31:33', '2023-01-04 10:39:06', '2023-01-05 09:31:33'),
('4eff895e-32d4-4432-8e34-1180695fbf67', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 1, '{\"event_unique_id\":\"122748857\",\"event_type_id\":\"2\",\"event_title\":\"sjgdf\",\"event_fee\":\"600\",\"updated_by\":null,\"event_description\":\"<p>sjgdf<\\/p>\",\"contact_person\":\"1\",\"event_date\":\"2022-12-30\",\"showBanner\":\"0\",\"payment_type\":\"1\",\"posted_by\":\"1\",\"event_time\":\"Mon, 26 Dec 2022 22:20:00 GMT\",\"priority\":\"high\",\"notification_type\":\"event_type\",\"updated_at\":\"2022-12-27T11:21:53.000000Z\",\"created_at\":\"2022-12-27T11:21:53.000000Z\",\"id\":56}', NULL, NULL, '1', 'event_type', '2022-12-31 05:00:15', '2022-12-27 11:21:57', '2022-12-31 05:00:15'),
('50f3a086-cb38-4dc8-b33d-88d1cb123eff', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 1, '{\"event_unique_id\":\"122588118\",\"event_type_id\":\"4\",\"event_title\":\"jamela3357\",\"event_fee\":\"50\",\"updated_by\":null,\"event_description\":\"<p>jamela ase<\\/p>\",\"contact_person\":\"1,21,22\",\"event_date\":\"2022-12-22\",\"showBanner\":\"0\",\"payment_type\":\"1\",\"posted_by\":\"1\",\"event_time\":\"Sun, 25 Dec 2022 00:29:00 GMT\",\"priority\":\"normal\",\"updated_at\":\"2022-12-25T06:21:29.000000Z\",\"created_at\":\"2022-12-25T06:21:29.000000Z\",\"id\":44}', NULL, NULL, '21', NULL, '2022-12-25 10:50:05', '0000-00-00 00:00:00', '2022-12-25 10:50:05'),
('51640177-4757-4e66-a56b-39aeba059c7e', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 1, '{\"event_unique_id\":\"122781368\",\"event_type_id\":\"3\",\"event_title\":\"rhgew\",\"event_fee\":\"500\",\"updated_by\":null,\"event_description\":\"<p>gdgasda<\\/p>\",\"contact_person\":\"1\",\"event_date\":\"2022-12-22\",\"showBanner\":\"0\",\"payment_type\":\"1\",\"posted_by\":\"1\",\"event_time\":\"Tue, 27 Dec 2022 00:31:00 GMT\",\"priority\":\"normal\",\"notification_type\":\"event_type\",\"updated_at\":\"2022-12-27T12:01:02.000000Z\",\"created_at\":\"2022-12-27T12:01:02.000000Z\",\"id\":61}', NULL, NULL, '1', 'event_type', '2022-12-31 05:00:15', '2022-12-27 12:01:06', '2022-12-31 05:00:15'),
('5efeb7a3-629e-4657-a0e9-d80f175b69a5', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 1, '{\"event_unique_id\":\"122749345\",\"event_type_id\":\"4\",\"event_title\":\"sada\",\"event_fee\":\"400\",\"updated_by\":null,\"event_description\":\"<p>asdasd<\\/p>\",\"contact_person\":\"1\",\"event_date\":\"2022-12-30\",\"showBanner\":\"0\",\"payment_type\":\"1\",\"posted_by\":\"1\",\"event_time\":\"Tue, 27 Dec 2022 00:30:00 GMT\",\"priority\":\"normal\",\"notification_type\":\"event_type\",\"updated_at\":\"2022-12-27T11:28:59.000000Z\",\"created_at\":\"2022-12-27T11:28:59.000000Z\",\"id\":58}', NULL, NULL, '1', 'event_type', '2022-12-31 05:00:15', '2022-12-27 11:29:03', '2022-12-31 05:00:15'),
('6f7681ea-ae4b-4a26-bf47-a7fc23c0fe35', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 1, '{\"event_unique_id\":\"122588803\",\"event_type_id\":\"2\",\"event_title\":\"uasd9\",\"event_fee\":\"0\",\"updated_by\":null,\"event_description\":\"<p>sydasa<\\/p>\",\"contact_person\":\"1\",\"event_date\":\"2022-12-28\",\"showBanner\":\"0\",\"payment_type\":\"0\",\"posted_by\":\"1\",\"event_time\":\"Sun, 25 Dec 2022 00:30:00 GMT\",\"priority\":\"normal\",\"notification_type\":\"event_type\",\"updated_at\":\"2022-12-25T08:51:59.000000Z\",\"created_at\":\"2022-12-25T08:51:59.000000Z\",\"id\":51}', NULL, NULL, '1', 'event_type', '2022-12-25 11:16:29', '2022-12-13 18:00:00', '2022-12-25 11:16:29'),
('6fb69b03-742a-43f1-8f26-71662bf44187', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 1, '{\"event_unique_id\":\"12277592\",\"event_type_id\":\"4\",\"event_title\":\"iasydauysd\",\"event_fee\":\"700\",\"updated_by\":null,\"event_description\":\"<p>iuyuaysdya<\\/p>\",\"contact_person\":\"1\",\"event_date\":\"2022-12-31\",\"showBanner\":\"1\",\"payment_type\":\"1\",\"posted_by\":\"1\",\"event_time\":\"Mon, 26 Dec 2022 23:26:00 GMT\",\"priority\":\"high\",\"notification_type\":\"event_type\",\"updated_at\":\"2022-12-27T11:12:40.000000Z\",\"created_at\":\"2022-12-27T11:12:40.000000Z\",\"id\":54}', NULL, NULL, '1', 'event_type', '2022-12-31 05:00:15', '2022-12-27 11:12:44', '2022-12-31 05:00:15'),
('7730a8d9-fb1e-4b6d-8d5d-c440a878f3ae', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 20, '{\"event_unique_id\":\"122727864\",\"event_type_id\":\"3\",\"event_title\":\"uuu\",\"event_fee\":\"600\",\"updated_by\":null,\"event_description\":\"<p>uuuuda<\\/p>\",\"contact_person\":\"1,20\",\"event_date\":\"2022-12-30\",\"showBanner\":\"1\",\"payment_type\":\"1\",\"posted_by\":\"1\",\"event_time\":\"Tue, 27 Dec 2022 00:31:00 GMT\",\"priority\":\"high\",\"notification_type\":\"event_type\",\"updated_at\":\"2022-12-27T10:59:07.000000Z\",\"created_at\":\"2022-12-27T10:59:07.000000Z\",\"id\":52}', NULL, NULL, '1', 'event_type', NULL, '2022-12-27 10:59:14', '2022-12-27 10:59:14'),
('97340b73-9238-4a40-9fb4-53924a75796c', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 1, NULL, NULL, NULL, '1', NULL, '2022-12-25 11:16:29', '2022-12-25 08:00:24', '2022-12-25 11:16:29'),
('9e1f66fe-7221-4d59-877b-5122340810d6', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 21, '{\"event_unique_id\":\"122588118\",\"event_type_id\":\"4\",\"event_title\":\"jamela3357\",\"event_fee\":\"50\",\"updated_by\":null,\"event_description\":\"<p>jamela ase<\\/p>\",\"contact_person\":\"1,21,22\",\"event_date\":\"2022-12-22\",\"showBanner\":\"0\",\"payment_type\":\"1\",\"posted_by\":\"1\",\"event_time\":\"Sun, 25 Dec 2022 00:29:00 GMT\",\"priority\":\"normal\",\"updated_at\":\"2022-12-25T06:21:29.000000Z\",\"created_at\":\"2022-12-25T06:21:29.000000Z\",\"id\":44}', NULL, NULL, '21', NULL, NULL, '2022-12-25 06:21:36', '2022-12-25 06:21:36'),
('a3dd6b51-ec44-44b3-8b73-83b5c25b4ea4', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 38, '{\"event_unique_id\":\"010893442\",\"event_type_id\":\"4\",\"event_title\":\"check event\",\"event_fee\":\"400\",\"updated_by\":null,\"event_description\":\"<p>check eevent description<\\/p>\",\"contact_person\":\"38,36\",\"event_date\":\"2023-01-27\",\"showBanner\":\"1\",\"payment_type\":\"1\",\"posted_by\":\"36\",\"event_time\":\"Sat, 07 Jan 2023 23:25:00 GMT\",\"priority\":\"high\",\"notification_type\":\"event_type\",\"updated_at\":\"2023-01-08T10:06:43.000000Z\",\"created_at\":\"2023-01-08T10:06:43.000000Z\",\"id\":65}', NULL, NULL, '36', 'event_type', NULL, '2023-01-08 10:06:54', '2023-01-08 10:06:54'),
('af9389ca-65f9-4c66-a60b-67ffa3416c95', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 36, '{\"event_unique_id\":\"010893442\",\"event_type_id\":\"4\",\"event_title\":\"check event\",\"event_fee\":\"400\",\"updated_by\":null,\"event_description\":\"<p>check eevent description<\\/p>\",\"contact_person\":\"38,36\",\"event_date\":\"2023-01-27\",\"showBanner\":\"1\",\"payment_type\":\"1\",\"posted_by\":\"36\",\"event_time\":\"Sat, 07 Jan 2023 23:25:00 GMT\",\"priority\":\"high\",\"notification_type\":\"event_type\",\"updated_at\":\"2023-01-08T10:06:43.000000Z\",\"created_at\":\"2023-01-08T10:06:43.000000Z\",\"id\":65}', NULL, NULL, '36', 'event_type', NULL, '2023-01-08 10:06:54', '2023-01-08 10:06:54'),
('d04fb230-d273-46cc-a298-6a27f7fc185e', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 1, '{\"event_unique_id\":\"122765698\",\"event_type_id\":\"4\",\"event_title\":\"yasdytastyd\",\"event_fee\":\"500\",\"updated_by\":null,\"event_description\":\"<p>ytatsdtas<\\/p>\",\"contact_person\":\"1\",\"event_date\":\"2022-12-21\",\"showBanner\":\"0\",\"payment_type\":\"1\",\"posted_by\":\"1\",\"event_time\":\"Mon, 26 Dec 2022 18:01:00 GMT\",\"priority\":\"high\",\"notification_type\":\"event_type\",\"updated_at\":\"2022-12-27T11:47:20.000000Z\",\"created_at\":\"2022-12-27T11:47:20.000000Z\",\"id\":59}', NULL, NULL, '1', 'event_type', '2022-12-31 05:00:15', '2022-12-27 11:47:24', '2022-12-31 05:00:15'),
('e847ae00-a0b7-4126-a8db-dc39c4d6b513', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 1, '{\"event_unique_id\":\"122761666\",\"event_type_id\":\"4\",\"event_title\":\"iausduasda\",\"event_fee\":\"800\",\"updated_by\":null,\"event_description\":\"<p>yyasdyaysdaysda<\\/p>\",\"contact_person\":\"1\",\"event_date\":\"2022-12-29\",\"showBanner\":\"0\",\"payment_type\":\"1\",\"posted_by\":\"1\",\"event_time\":\"Tue, 27 Dec 2022 00:30:00 GMT\",\"priority\":\"high\",\"notification_type\":\"event_type\",\"updated_at\":\"2022-12-27T11:03:43.000000Z\",\"created_at\":\"2022-12-27T11:03:43.000000Z\",\"id\":53}', NULL, NULL, '1', 'event_type', '2022-12-31 05:00:15', '2022-12-27 11:03:46', '2022-12-31 05:00:15'),
('fe7ed269-0656-4503-a933-0aab3b21f3e7', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 1, '{\"event_unique_id\":\"123135616\",\"event_type_id\":\"4\",\"event_title\":\"full satck\",\"event_fee\":\"500\",\"updated_by\":null,\"event_description\":\"<p>full stack<\\/p>\",\"contact_person\":\"1\",\"event_date\":\"2023-01-24\",\"showBanner\":\"0\",\"payment_type\":\"1\",\"posted_by\":\"1\",\"event_time\":\"Fri, 30 Dec 2022 18:59:00 GMT\",\"priority\":\"normal\",\"notification_type\":\"event_type\",\"updated_at\":\"2022-12-31T04:42:28.000000Z\",\"created_at\":\"2022-12-31T04:42:28.000000Z\",\"id\":63}', NULL, NULL, '1', 'event_type', '2022-12-31 05:00:15', '2022-12-31 04:42:37', '2022-12-31 05:00:15');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `amount` bigint(255) DEFAULT NULL,
  `address` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `transaction_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `currency` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `name`, `email`, `phone`, `amount`, `address`, `status`, `transaction_id`, `currency`) VALUES
(82, 'hasan12', 'mahmudul12.ri@gmail.com', '1701987948', 200, 'Customer Address', 'Pending', '123', 'BDT'),
(83, 'hasan', 'mahmudul.ri@gmail.com', '01701987948', 200, 'Customer Address', 'Pending', '123', 'BDT');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('rakib10ms@gmail.com', '7528226', '2022-11-22 05:58:15'),
('rakib10ms@gmail.com', '2214917', '2022-12-15 07:25:33');

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(11, 'App\\Models\\User', 2, 'rakibtech9@gmail.com_Token', '18d8abe5cb5cc50d1d221d8ecbfafeb07d7a94c33b33a5ef06bb85084537a480', '[\"*\"]', NULL, NULL, '2022-11-22 09:31:06', '2022-11-22 09:31:06'),
(21, 'App\\Models\\User', 3, 'hasan@gmail.com_Token', '5358e2abdd957aefef1bc16bfff6799676ac92a124185bac100e9b2ca956ab2d', '[\"*\"]', NULL, NULL, '2022-11-23 10:55:27', '2022-11-23 10:55:27'),
(52, 'App\\Models\\User', 4, 'mahmudul.ri@gmail.com_Token', '2d5d9da49e9d2dd1b88208028b0c46d9bcdb7f0b439a19a933d53d6b23795773', '[\"*\"]', NULL, NULL, '2022-11-30 04:23:36', '2022-11-30 04:23:36'),
(53, 'App\\Models\\User', 4, 'mahmudul.ri@gmail.com', 'ffcc6651251abdc25ea48ea72b921123ddd4aeeff67bb62ed0a4e502cccb83c3', '[\"*\"]', NULL, NULL, '2022-11-30 04:24:11', '2022-11-30 04:24:11'),
(54, 'App\\Models\\User', 4, 'mahmudul.ri@gmail.com', 'f6c7f19eaff713c24dcc7ca8f27f2490a1b56797d60853c4964ea1cd21b3a7dd', '[\"*\"]', '2022-11-30 08:33:26', NULL, '2022-11-30 04:24:21', '2022-11-30 08:33:26'),
(55, 'App\\Models\\User', 4, 'mahmudul.ri@gmail.com', 'd6b0f8c275f1ff9d02190dec0dc5e30b40a722ac6522b101223272f5d2b8a365', '[\"*\"]', '2022-11-30 09:41:43', NULL, '2022-11-30 05:04:12', '2022-11-30 09:41:43'),
(64, 'App\\Models\\User', 6, 'aryan.it08@gmail.com_Token', '3ba8b2372545a2f7f3819c2ac183b3663b695cc33fc8948adbfaa3756c491d71', '[\"*\"]', NULL, NULL, '2022-11-30 10:24:51', '2022-11-30 10:24:51'),
(65, 'App\\Models\\User', 6, 'aryan.it08@gmail.com', '1d1918e4bd730ae500354d2ab87ad5d287f9a461cd60d343160054a50eb7102d', '[\"*\"]', NULL, NULL, '2022-11-30 10:26:24', '2022-11-30 10:26:24'),
(66, 'App\\Models\\User', 6, 'aryan.it08@gmail.com', 'e6e191db146e608e406763c0473efc106eb2642cad4a9e4bb62d0252edd0ee67', '[\"*\"]', NULL, NULL, '2022-11-30 10:26:46', '2022-11-30 10:26:46'),
(68, 'App\\Models\\User', 7, 'mosannef@gmail.com_Token', '1e1a0319a47310495f81cd730ceb149748f241ed78f3bfa6a5433caf3a2edd0a', '[\"*\"]', NULL, NULL, '2022-11-30 10:50:00', '2022-11-30 10:50:00'),
(69, 'App\\Models\\User', 7, 'mosannef@gmail.com', '5adae1259e2767a031240de003ebaf73c3015320535ec141eec5132c95b8f563', '[\"*\"]', NULL, NULL, '2022-11-30 10:50:39', '2022-11-30 10:50:39'),
(70, 'App\\Models\\User', 7, 'mosannef@gmail.com', '3d9a97b8936945355cb6e867507da71d49d7866f2f3b96bdddf4684531749fca', '[\"*\"]', '2022-11-30 11:59:05', NULL, '2022-11-30 10:50:51', '2022-11-30 11:59:05'),
(114, 'App\\Models\\User', 8, 'newrakib@gmail.com_Token', 'ae61c42713495400b5b891c4cf1e6a59bfc9a53a21e7fc3b1165e7bf0f994d29', '[\"*\"]', NULL, NULL, '2022-12-06 07:07:54', '2022-12-06 07:07:54'),
(115, 'App\\Models\\User', 9, 'newrakib@gmail.com_Token', '0fb8926d355298ee7279c5e86a7795ca098d5ac4ab940294d4c97ccb0f2c7991', '[\"*\"]', NULL, NULL, '2022-12-06 07:10:18', '2022-12-06 07:10:18'),
(116, 'App\\Models\\User', 10, 'newrakib@gmail.com_Token', '19f49fde9e775ca8262b1583b985ba4379623d28e1bc51acb52c7da60f7a6b27', '[\"*\"]', NULL, NULL, '2022-12-06 07:10:57', '2022-12-06 07:10:57'),
(117, 'App\\Models\\User', 13, 'newrakib@gmail.com_Token', '62dac9868ca0a866064ed3d4e23db769435a34e90d1637e90dab26a3fef13226', '[\"*\"]', NULL, NULL, '2022-12-06 07:25:42', '2022-12-06 07:25:42'),
(118, 'App\\Models\\User', 15, 'newrakib@gmail.com_Token', 'c094b137ebb7435b619c5c5a8ccfea4dbe7b4d088592c5408b016d3d2bfc199a', '[\"*\"]', NULL, NULL, '2022-12-06 08:17:53', '2022-12-06 08:17:53'),
(119, 'App\\Models\\User', 16, 'newrakib@gmail.com_Token', 'd4238ab0009f4c41c9a982b644c5ddcc3ba99975f84f73da66e01688fa4c866a', '[\"*\"]', NULL, NULL, '2022-12-06 08:24:58', '2022-12-06 08:24:58'),
(120, 'App\\Models\\User', 17, 'newrakib@gmail.com_Token', '9f73a8e8bd4d536c9fe27fc2ea59b28f8f3cae9bc894750895eed6f6efa78a4c', '[\"*\"]', NULL, NULL, '2022-12-06 08:26:00', '2022-12-06 08:26:00'),
(121, 'App\\Models\\User', 18, 'newrakib@gmail.com_Token', '473ef94bcc40841a36467d9dde83c3a8112e2bfae2b5bf53bf432c4339d57376', '[\"*\"]', NULL, NULL, '2022-12-06 08:27:34', '2022-12-06 08:27:34'),
(126, 'App\\Models\\User', 19, 'newrakib2@gmail.com_Token', 'd9a212b640db34502c5d6195015d9de4f9a8439cf0b18c4ea64a606579b35a3b', '[\"*\"]', NULL, NULL, '2022-12-11 04:22:12', '2022-12-11 04:22:12'),
(127, 'App\\Models\\User', 19, 'newrakib2@gmail.com', 'e5b1b2ed06d3eff4322b52ed5887d10222c75afecde5fe5caef9fea286352f60', '[\"*\"]', '2022-12-11 05:32:09', NULL, '2022-12-11 05:28:59', '2022-12-11 05:32:09'),
(167, 'App\\Models\\User', 21, 'tahsan@gmail.com_Token', '7b12dcbf49ec69bd0b83d9d961ef9cc8349104f1e7d569baa070f27829441069', '[\"*\"]', NULL, NULL, '2022-12-18 11:52:41', '2022-12-18 11:52:41'),
(168, 'App\\Models\\User', 22, 'mithila@gmail.com_Token', 'c33ecfebefe175f27488d3e48e430fc26ff59ac26294ebce2fe9445b8c1994ed', '[\"*\"]', NULL, NULL, '2022-12-18 11:54:47', '2022-12-18 11:54:47'),
(201, 'App\\Models\\User', 23, 'shanewatson@gmail.com_Token', 'c19ab8ab122b9815b12863534492a4ea70cf166c11bf40cf791ed63dbd1ec58b', '[\"*\"]', NULL, NULL, '2022-12-26 06:17:11', '2022-12-26 06:17:11'),
(202, 'App\\Models\\User', 24, 'shanewatson@gmail.com_Token', '54c2556ec1fb31a9662aab4d6a5cccbab3ea1bbaaf6b469f645ad34655b5790d', '[\"*\"]', NULL, NULL, '2022-12-26 06:26:03', '2022-12-26 06:26:03'),
(203, 'App\\Models\\User', 25, 'shanewatson@gmail.com_Token', '0d6059a2385f41b89e0c345dde4cbbbb0db1cec2c7ebe751d5117baf1de84a20', '[\"*\"]', NULL, NULL, '2022-12-26 06:38:30', '2022-12-26 06:38:30'),
(208, 'App\\Models\\User', 30, 'rakib2@gmail.com_Token', '0782f37f49ecb717400a6f1657837d53d16beddfdf6ae3ab0723ff8ea79f6f5a', '[\"*\"]', NULL, NULL, '2022-12-28 04:59:59', '2022-12-28 04:59:59'),
(209, 'App\\Models\\User', 31, 'rakib2@gmail.com_Token', '28a5cefe5aac5df98778a1d27601cd60cd92520210b0a6d44ce7dd86256f9237', '[\"*\"]', NULL, NULL, '2022-12-28 05:43:57', '2022-12-28 05:43:57'),
(210, 'App\\Models\\User', 32, 'golam@gmail.com_Token', '3badbb91f695a2b190e6922f67c5c69acc268a68fff850ca002143c8faeaa4f4', '[\"*\"]', NULL, NULL, '2022-12-28 06:14:39', '2022-12-28 06:14:39'),
(211, 'App\\Models\\User', 33, 'rakibhossain18156@gmail.com_Token', '21e0f117e5953f7fe2c872bcc92fdbb4560be24759e2faa9210c219111bc7c0a', '[\"*\"]', NULL, NULL, '2022-12-28 09:18:43', '2022-12-28 09:18:43'),
(222, 'App\\Models\\User', 34, 'rajibhossain@gmail.com_Token', '8a436b311223afd4d092e45fb972bdb1f59facc51fd1ab524e70f0287668007b', '[\"*\"]', NULL, NULL, '2022-12-30 06:18:26', '2022-12-30 06:18:26'),
(223, 'App\\Models\\User', 35, 'rajibhossai2n@gmail.com_Token', '060974847a92e4b808cf33373b3e019d67c3833aec5480668ef0bb9b042a1626', '[\"*\"]', NULL, NULL, '2022-12-30 06:23:07', '2022-12-30 06:23:07'),
(234, 'App\\Models\\User', 1, 'rakib10ms@gmail.com', '54113aa72980e2785bd0c13c5723b846f5c4fd1c597de4ceed21b9f66c8bcd80', '[\"*\"]', '2022-12-31 05:02:13', NULL, '2022-12-31 05:00:43', '2022-12-31 05:02:13'),
(237, 'App\\Models\\User', 37, 'arafat@gmail.com_Token', '830d816b86ca43313724a1b5bd320b6545cee9796bca002b3e4b33de67b97c13', '[\"*\"]', NULL, NULL, '2022-12-31 05:21:51', '2022-12-31 05:21:51'),
(242, 'App\\Models\\User', 38, 'rakibhossain18156@gmail.com_Token', '4ecc93740508d4360be8fa7dc132a9a188766a5456f2d291b3b25c31948df587', '[\"*\"]', NULL, NULL, '2022-12-31 10:48:21', '2022-12-31 10:48:21'),
(262, 'App\\Models\\User', 36, 'rakib10ms@gmail.com', '886f4ec9924344b3be81edbc74afefe23408061d02b02ef93cfdf992f1120237', '[\"*\"]', '2023-01-08 05:22:38', NULL, '2023-01-08 05:22:13', '2023-01-08 05:22:38'),
(263, 'App\\Models\\User', 36, 'rakib10ms@gmail.com', 'b57840cba48671de5366ed864aa0093941bcb752e3e29208c2c2284b4b993ae8', '[\"*\"]', '2023-01-08 10:31:34', NULL, '2023-01-08 07:11:10', '2023-01-08 10:31:34'),
(264, 'App\\Models\\User', 36, 'rakib10ms@gmail.com', 'e9e8722daeeeb521f939773abbb7c9b35743e044b77dbd8529fca4a383fc32f8', '[\"*\"]', '2023-01-08 11:18:09', NULL, '2023-01-08 11:05:31', '2023-01-08 11:18:09');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `post_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `post_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `post_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `posted_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isArchived` tinyint(1) NOT NULL DEFAULT 0,
  `isPublished` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `tag` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `post_title`, `post_type`, `post_description`, `image`, `posted_by`, `updated_by`, `date`, `isArchived`, `isPublished`, `tag`, `created_at`, `updated_at`) VALUES
(1, 'Check full Stack ssssssssss', '1', 'An Emcal injuries or allergic reactions.dsasddddddddddddddddddddd asddddddddddddddddddddddd asddddddddddddddddddddddddddddddddddddddddddddddddd asddddddddddddddddddddddddddddddddddd asdddddddddddddddddddddddd', '1672900837.jpg', '35', NULL, '2022-12-02', 0, '1', NULL, '2023-01-05 06:40:37', '2023-01-08 10:01:46'),
(2, 'Full Stack Developer for google', '1', 'our emergency based on you..and you are the genius of mind', '1672900996.jpg', '35', NULL, '2022-12-02', 0, '0', NULL, '2023-01-05 06:43:16', '2023-01-05 06:43:16');

-- --------------------------------------------------------

--
-- Table structure for table `post_types`
--

CREATE TABLE `post_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mapping_user` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post_types`
--

INSERT INTO `post_types` (`id`, `type_name`, `created_by`, `mapping_user`, `created_at`, `updated_at`) VALUES
(1, 'Emergency', NULL, NULL, '2023-01-05 06:38:41', '2023-01-05 06:38:41'),
(2, 'Donation', NULL, NULL, '2023-01-05 06:38:50', '2023-01-05 06:38:50');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(10, 'Admin', 'web', '2022-12-26 06:12:55', '2022-12-26 06:12:55'),
(11, 'Moderator', 'web', '2022-12-26 06:13:02', '2022-12-26 06:13:02'),
(12, 'Alumni', 'web', '2022-12-26 06:13:07', '2022-12-26 06:13:07'),
(13, 'Staff', 'web', '2022-12-26 06:13:13', '2022-12-26 06:13:13');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bio` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nick_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `office_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `batch` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `blood_group` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stream` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_sector` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_sub_sector` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `present_address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `permanent_address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thana` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `otp_verify` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `device_token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `confirm_password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `cv_file` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `bio`, `nick_name`, `email`, `office_email`, `phone_no`, `batch`, `blood_group`, `stream`, `user_role`, `gender`, `job_sector`, `job_sub_sector`, `present_address`, `permanent_address`, `thana`, `image`, `email_verified_at`, `otp_verify`, `device_token`, `password`, `confirm_password`, `facebook_link`, `twitter_link`, `linkedin_link`, `status`, `cv_file`, `remember_token`, `created_at`, `updated_at`) VALUES
(25, 'Shane Watson', NULL, 'Watson', 'shanewatson@gmail.com', 'shane.ba@ptvl.com', '01778749512', '2', '1', '2', 'Moderator', 'Male', '2', '23', 'Kudar Bazar,Muradpur,Kadamtoli,Jatrabari,Dhaka-1201', 'Enayetpur,Raypur,Lakhsmipur,Chittagong', 'Raypur', '1672036709.jpg', NULL, NULL, NULL, '$2y$10$TBriQJE7y0Ruefh5m.7b4u0tdMQyak1NyUxcqsO2qy7iOFNfu5y02', '$2y$10$b76pGAgUpa/lxPX1GEmUyeouWALHkEX3jcl6DouinMRAqgsxmZKRa', 'www.facebook.com', NULL, NULL, 'pending', '1672636898.pdf', NULL, '2022-12-26 06:38:30', '2023-01-02 05:21:38'),
(32, 'Golam Mostafa', NULL, 'Shown', 'golam@gmail.com', 'golam.ba@ptvl.com', '0177774454', '2', '1', '2', 'Moderator', 'Male', '2', '23', 'Kudar Bazar,Muradpur,Kadamtoli,Jatrabari,Dhaka-1201', 'Enayetpur,Raypur,Lakhsmipur,Chittagong', 'Ramgonj', '1672208079.jpg', NULL, NULL, NULL, '$2y$10$GAqm1/.OZR65K0XI20Qaa.8sh2WbWp4a.hlDX/W2ZOF5euD0y9xvi', '$2y$10$eLfdnA6kOjPTBNjTk6txNuiXcRAw/Is1RK5FMkuC42St8Swcls0he', NULL, NULL, NULL, 'active', NULL, NULL, '2022-12-28 06:14:39', '2022-12-28 06:14:39'),
(34, 'Rajib Hossain', NULL, 'Rajib', 'rajibhossain@gmail.com', 'rajib.ba@ptvl.com', '0177674459', '2', '1', '2', 'Staff', 'Male', '2', '24', 'Kudar Bazar,Muradpur,Kadamtoli,Jatrabari,Dhaka-1201', 'Enayetpur,Raypur,Lakhsmipur,Chittagong', 'Adabor', '1672381106.jpg', NULL, NULL, NULL, '$2y$10$IYoX1RbQjeD3pN65DgG3OensGopwWXj4I802.OfL.js1eJ.GvDtKW', '$2y$10$FqaB1IiQr4TjgCNqTx8es.hGVni54jf3PTD4lJoQ7JwBoQCGY8ud6', NULL, NULL, NULL, 'pending', NULL, NULL, '2022-12-30 06:18:26', '2022-12-30 06:18:26'),
(35, 'Rajib Hossain2', NULL, 'Rajib2', 'rajibhossai2n@gmail.com', 'rajib.ba@ptvl.com', '01776744500', '2', '1', '2', 'Admin', 'Male', '2', '23', 'Kudar Bazar,Muradpur,Kadamtoli,Jatrabari,Dhaka-1201', 'Enayetpur,Raypur,Lakhsmipur,Chittagong', 'Kakrail', '1672381387.jpg', NULL, NULL, NULL, '$2y$10$AEsjZbEg5aczsRehVxkJ8e8RphJJdXeU3x9B8FIpS1TVIO2KD3wk6', '$2y$10$Q6MIUK5iUgKZPQ8ExVrni.WV9gu9DTxxp/Om/yclUoUnuDq5U/Lea', NULL, NULL, NULL, 'active', NULL, NULL, '2022-12-30 06:23:07', '2022-12-30 06:23:07'),
(36, 'Md Rakib Ho', NULL, 'Rakib', 'rakib10ms@gmail.com', 'rajib.ba@ptvl.com', '01312275802', '1', '1', '2', 'Admin', 'Male', '2', '24', 'Kudar Bazar,Muradpur,Kadamtoli,Jatrabari,Dhaka-1201', 'Enayetpur,Raypur,Lakhsmipur,Chittagong', 'asdas', '1673155325.jpg', NULL, NULL, NULL, '$2y$10$CTyL15YXvy66PZBtPuTdQeA2BxuaotularM0P98JKtQx2ZJ8kotHS', '$2y$10$Cs3xMQ4nSZ1PxjVjxa7SC.fn.HTuBDoHx88usiW.r5now9ZUzOOPC', 'facebook_link', 'twiiter_lik', 'linkedin_lin k', 'active', NULL, NULL, '2022-12-31 05:07:11', '2023-01-08 05:22:05'),
(37, 'Fazle Arafat', NULL, 'Arafat', 'arafat@gmail.com', 'arafat.ba@ptvl.com', '01312775802', '1', '1', '2', 'Alumni', 'Male', '2', '23', 'Kudar Bazar,Muradpur,Kadamtoli,Jatrabari,Dhaka-1201', 'Enayetpur,Raypur,Lakhsmipur,Chittagong', 'asdas', '1672464110.jpg', NULL, NULL, NULL, '$2y$10$qKVWYWoES/50ggOCYpIuR.Jv3vIJjCI5ycvf1UltBxj/izb/l6cR.', '$2y$10$fBPzmrTOlG9QyF3mEcNhCOweNDIUqtqqoO1xZ57SZRUsJRypYb.s6', NULL, NULL, NULL, 'active', NULL, NULL, '2022-12-31 05:21:51', '2022-12-31 05:21:51'),
(38, 'Duplicate Rakib', NULL, 'Rakib Duplicate', 'rakibhossain18156@gmail.com', 'rakib.ba@ptvl.com', '01312475802', '1', '1', '3', 'Moderator', 'Female', '3', '24', 'Kudar Bazar,Muradpur,Kadamtoli,Jatrabari,Dhaka-1201', 'Enayetpur,Raypur,Lakhsmipur,Chittagong', 'asdasd', '1672483700.jpg', NULL, NULL, NULL, '$2y$10$mhQHM4liBJPrlCuYajxh3eO22pDv1cf8e.JP88gY1C56Ht4Ik.rB.', '$2y$10$2T1qDqpIJycTIDZUJQaqx.TJnFLFTGfd1SZjuzaztpWfHohSSsBxa', NULL, NULL, NULL, 'active', NULL, NULL, '2022-12-31 10:48:21', '2022-12-31 10:48:21');

-- --------------------------------------------------------

--
-- Table structure for table `user_educational_infos`
--

CREATE TABLE `user_educational_infos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ssc_passing_year` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hsc_passing_year` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bsc_passing_year` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `msc_passing_year` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ssc_institution` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hsc_institution` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bsc_institution` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `msc_institution` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ssc_grade` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hsc_grade` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bsc_grade` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `msc_grade` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_educational_infos`
--

INSERT INTO `user_educational_infos` (`id`, `user_id`, `ssc_passing_year`, `hsc_passing_year`, `bsc_passing_year`, `msc_passing_year`, `ssc_institution`, `hsc_institution`, `bsc_institution`, `msc_institution`, `ssc_grade`, `hsc_grade`, `bsc_grade`, `msc_grade`, `created_at`, `updated_at`) VALUES
(5, '18', '2014', '2030', '2020', NULL, 'Dhaka High School', 'Milestone college', 'Pakiza University and technology', 'Pakiza University and technology', '4.45', '4.56', '4.00', NULL, '2022-12-06 08:27:34', '2022-12-06 08:27:34'),
(6, '1', '2015', '2018', '2020', '2025', 'Mitali Biddapit High School', 'Choitali College', 'Pakiza University and technology', 'Hajigong College', '4.57', '4.50', '3.50', '4.67', '2022-12-11 04:22:12', '2022-12-15 04:40:09'),
(7, '20', '2040', '2030', '2000', '304', 'Hazi EKhlash College', 'Hazi EKhlash College', 'Hazi EKhlash College', 'Haji Chaitali', '5.00', '4.63', '4.67', '4.56', '2022-12-15 06:59:16', '2022-12-15 06:59:16'),
(8, '21', '2050', '2040', '4000', NULL, 'Hazi EKhlash College\\', NULL, 'Hazi EKhlash College', 'Hazi EKhlash College', '6.00', '4.50', '4.74', NULL, '2022-12-18 11:52:41', '2022-12-18 11:52:41'),
(9, '22', '2040', '2000', '3400', NULL, 'Radisoson Xollege ', 'Mielstome college', 'Hazi EKhlash College', NULL, '8.00', '5.07', '4.65', NULL, '2022-12-18 11:54:47', '2022-12-18 11:54:47'),
(10, '23', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-26 06:17:11', '2022-12-26 06:17:11'),
(11, '24', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-26 06:26:03', '2022-12-26 06:26:03'),
(12, '25', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-26 06:38:30', '2022-12-26 06:38:30'),
(13, '30', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-28 04:59:59', '2022-12-28 04:59:59'),
(14, '31', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-28 05:43:57', '2022-12-28 05:43:57'),
(15, '32', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-28 06:14:39', '2022-12-28 06:14:39'),
(16, '33', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-28 09:18:43', '2022-12-28 09:18:43'),
(17, '34', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-30 06:18:26', '2022-12-30 06:18:26'),
(18, '35', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-30 06:23:07', '2022-12-30 06:23:07'),
(19, '36', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-31 05:07:11', '2022-12-31 05:07:11'),
(20, '37', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-31 05:21:51', '2022-12-31 05:21:51'),
(21, '38', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-12-31 10:48:21', '2022-12-31 10:48:21');

-- --------------------------------------------------------

--
-- Table structure for table `user_professional_infos`
--

CREATE TABLE `user_professional_infos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `office_address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name_of_company` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `year` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `designation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_professional_infos`
--

INSERT INTO `user_professional_infos` (`id`, `user_id`, `office_address`, `name_of_company`, `year`, `designation`, `created_at`, `updated_at`) VALUES
(5, '1', 'kolkata', '2', '2022', 'designation update', '2022-12-06 08:27:34', '2022-12-13 08:10:12'),
(8, '1', 'dhaka', '', '2022-2024', 'Senior Account Manager', '2022-12-13 07:42:59', '2022-12-13 07:42:59'),
(10, '21', 'Khan Abc,20,Dhanmondi,Dhaka -1230', '1', '202-2030', NULL, '2022-12-18 11:52:41', '2022-12-18 11:52:41'),
(11, '22', 'Khan Abc,20,Dhanmondi,Dhaka -1230', '2', '2015-2028', NULL, '2022-12-18 11:54:47', '2022-12-18 11:54:47'),
(12, '23', 'Riffle square,Dhanmondi,Dhaka -1230', '2', NULL, NULL, '2022-12-26 06:17:11', '2022-12-26 06:17:11'),
(13, '24', 'Riffle square,Dhanmondi,Dhaka -1230', '2', NULL, NULL, '2022-12-26 06:26:03', '2022-12-26 06:26:03'),
(14, '25', 'Riffle square,Dhanmondi,Dhaka -1230', '2', NULL, NULL, '2022-12-26 06:38:30', '2022-12-26 06:38:30'),
(15, '30', 'Riffle square,Dhanmondi,Dhaka -1230', '2', NULL, NULL, '2022-12-28 04:59:59', '2022-12-28 04:59:59'),
(16, '31', 'Riffle square,Dhanmondi,Dhaka -1230', '2', NULL, NULL, '2022-12-28 05:43:57', '2022-12-28 05:43:57'),
(17, '32', 'Riffle square,Dhanmondi,Dhaka -1230', '2', NULL, NULL, '2022-12-28 06:14:39', '2022-12-28 06:14:39'),
(18, '33', 'Riffle square,Dhanmondi,Dhaka -1230', '2', NULL, NULL, '2022-12-28 09:18:43', '2022-12-28 09:18:43'),
(19, '34', 'Riffle square,Dhanmondi,Dhaka -1230', '2', NULL, NULL, '2022-12-30 06:18:26', '2022-12-30 06:18:26'),
(20, '35', 'Riffle square,Dhanmondi,Dhaka -1230', '2', NULL, NULL, '2022-12-30 06:23:07', '2022-12-30 06:23:07'),
(21, '36', 'Riffle square,Dhanmondi,Dhaka -1230', '3', NULL, NULL, '2022-12-31 05:07:11', '2022-12-31 05:07:11'),
(22, '37', 'Jatrabari,Dhaka', '3', NULL, NULL, '2022-12-31 05:21:51', '2022-12-31 05:21:51'),
(23, '38', 'North Badda,Dhaka', '3', NULL, NULL, '2022-12-31 10:48:21', '2022-12-31 10:48:21');

-- --------------------------------------------------------

--
-- Table structure for table `vlogs`
--

CREATE TABLE `vlogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `streaming_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vlog_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `vlogs`
--

INSERT INTO `vlogs` (`id`, `category_id`, `streaming_link`, `vlog_title`, `image`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(2, '2', 'sadasd update', 'asdas  update', '1670933912.jpg', NULL, NULL, '2022-12-13 12:18:32', '2022-12-14 09:32:46'),
(4, '1', 'https://www.youtube.com/watch?v=TB6n7I52gzc', 'Cultural Vlog', '1672229929.jpg', '1', NULL, '2022-12-28 12:18:49', '2022-12-28 12:18:49');

-- --------------------------------------------------------

--
-- Table structure for table `vlog_categories`
--

CREATE TABLE `vlog_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `vlog_categories`
--

INSERT INTO `vlog_categories` (`id`, `category_name`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'Cultural', NULL, NULL, '2022-12-13 09:36:34', '2022-12-15 07:08:38'),
(2, 'Fun', NULL, NULL, '2022-12-13 09:37:02', '2022-12-15 07:08:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advertisements`
--
ALTER TABLE `advertisements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `advertisement_multiple_images`
--
ALTER TABLE `advertisement_multiple_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `article_blogs`
--
ALTER TABLE `article_blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `article_blog_categories`
--
ALTER TABLE `article_blog_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `article_blog_sub_categories`
--
ALTER TABLE `article_blog_sub_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `aussta_events`
--
ALTER TABLE `aussta_events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `austtaa_batches`
--
ALTER TABLE `austtaa_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `austtaa_blood_groups`
--
ALTER TABLE `austtaa_blood_groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `austtaa_company_names`
--
ALTER TABLE `austtaa_company_names`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `austtaa_job_sectors`
--
ALTER TABLE `austtaa_job_sectors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `austtaa_job_sector_job_sub_sector_maps`
--
ALTER TABLE `austtaa_job_sector_job_sub_sector_maps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `austtaa_job_sub_sectors`
--
ALTER TABLE `austtaa_job_sub_sectors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `austtaa_streams`
--
ALTER TABLE `austtaa_streams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `austta_event_types`
--
ALTER TABLE `austta_event_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banner_multiple_images`
--
ALTER TABLE `banner_multiple_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event_multiple_images`
--
ALTER TABLE `event_multiple_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `global_notifications`
--
ALTER TABLE `global_notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_posts`
--
ALTER TABLE `job_posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_types`
--
ALTER TABLE `job_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login_email_otps`
--
ALTER TABLE `login_email_otps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `notice_news`
--
ALTER TABLE `notice_news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notice_news_categories`
--
ALTER TABLE `notice_news_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notice_news_sub_categories`
--
ALTER TABLE `notice_news_sub_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post_types`
--
ALTER TABLE `post_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_phone_no_unique` (`phone_no`);

--
-- Indexes for table `user_educational_infos`
--
ALTER TABLE `user_educational_infos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_professional_infos`
--
ALTER TABLE `user_professional_infos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vlogs`
--
ALTER TABLE `vlogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vlog_categories`
--
ALTER TABLE `vlog_categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advertisements`
--
ALTER TABLE `advertisements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `advertisement_multiple_images`
--
ALTER TABLE `advertisement_multiple_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT for table `article_blogs`
--
ALTER TABLE `article_blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `article_blog_categories`
--
ALTER TABLE `article_blog_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `article_blog_sub_categories`
--
ALTER TABLE `article_blog_sub_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `aussta_events`
--
ALTER TABLE `aussta_events`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `austtaa_batches`
--
ALTER TABLE `austtaa_batches`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `austtaa_blood_groups`
--
ALTER TABLE `austtaa_blood_groups`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `austtaa_company_names`
--
ALTER TABLE `austtaa_company_names`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `austtaa_job_sectors`
--
ALTER TABLE `austtaa_job_sectors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `austtaa_job_sector_job_sub_sector_maps`
--
ALTER TABLE `austtaa_job_sector_job_sub_sector_maps`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `austtaa_job_sub_sectors`
--
ALTER TABLE `austtaa_job_sub_sectors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `austtaa_streams`
--
ALTER TABLE `austtaa_streams`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `austta_event_types`
--
ALTER TABLE `austta_event_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `banner_multiple_images`
--
ALTER TABLE `banner_multiple_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `event_multiple_images`
--
ALTER TABLE `event_multiple_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `global_notifications`
--
ALTER TABLE `global_notifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `job_posts`
--
ALTER TABLE `job_posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `job_types`
--
ALTER TABLE `job_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `login_email_otps`
--
ALTER TABLE `login_email_otps`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=204;

--
-- AUTO_INCREMENT for table `notice_news`
--
ALTER TABLE `notice_news`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `notice_news_categories`
--
ALTER TABLE `notice_news_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `notice_news_sub_categories`
--
ALTER TABLE `notice_news_sub_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=265;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `post_types`
--
ALTER TABLE `post_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `user_educational_infos`
--
ALTER TABLE `user_educational_infos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `user_professional_infos`
--
ALTER TABLE `user_professional_infos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `vlogs`
--
ALTER TABLE `vlogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `vlog_categories`
--
ALTER TABLE `vlog_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
