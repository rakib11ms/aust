-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2022 at 11:12 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

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
  `view_job_page` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '1=true,0=false',
  `view_advment_page` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '1=true,0=false',
  `create_advment_page` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '1=true,0=false',
  `add_general_post_page` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '1=true,0=false',
  `add_event_page` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '1=true,0=false',
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `show_time` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `show_days` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `advertisement_fee` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_show_days` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `position` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `showMobile` tinyint(1) NOT NULL DEFAULT 1,
  `showDesktop` tinyint(1) NOT NULL DEFAULT 1,
  `isPublished` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `advertisements`
--

INSERT INTO `advertisements` (`id`, `advertisement_title`, `posted_by`, `updated_by`, `advertisement_description`, `home_page`, `view_job_page`, `view_advment_page`, `create_advment_page`, `add_general_post_page`, `add_event_page`, `image`, `show_time`, `show_days`, `advertisement_fee`, `last_show_days`, `redirect_link`, `payment_type`, `position`, `showMobile`, `showDesktop`, `isPublished`, `created_at`, `updated_at`) VALUES
(4, 'yyy', '1', '1', '<p>yyy</p>', '1', '0', '1', '1', '0', '0', '1669184533advertising-word-cloud-business-concept-56936998.jpg', '10', '20', NULL, '2022-12-13', 'asdasd', '0', 'middle', 1, 1, '1', '2022-11-23 06:22:13', '2022-11-23 09:53:45'),
(5, 'advertismement title', '1', '1', '<p>asdas</p>', '1', '0', '0', '0', '0', '0', '1669195110noroute.jpg, 1669195110images (4).jpg, 16691951101593193401-fairandlovelyedited.jpg', '10', '15', NULL, '2022-12-08', 'https://www.youtube.com/', '0', 'bottom', 1, 1, '1', '2022-11-23 09:18:30', '2022-11-23 09:53:45'),
(6, 'zxc', '1', NULL, '<p>zxczxc</p>', '1', '0', '0', '1', '0', '0', '1669272080images (4).jpg, 16692720801593193401-fairandlovelyedited.jpg', '12', '12', NULL, '2022-12-06', 'zxcz', '0', 'top', 1, 1, '1', '2022-11-24 06:41:20', '2022-11-24 06:41:20'),
(7, 'advertisement title', '1', NULL, '<p>advertisement description</p>', '1', '0', '0', '1', '0', '0', '1669273573images (4).jpg, 16692735731593193401-fairandlovelyedited.jpg, 1669273573advertising-word-cloud-business-concept-56936998.jpg', '5', '20', NULL, '2022-11-21', 'http://www.crickinfo.com/', '0', 'bottom', 1, 1, '0', '2022-11-24 07:06:13', '2022-11-29 09:52:59'),
(9, 'ds', '1', NULL, '<p>sdsd</p>', '1', '1', '1', '1', '1', '1', '1669278005noroute.jpg', '12', '12', NULL, '2022-12-06', 'sdsd', '1', 'top', 1, 1, '0', '2022-11-24 08:20:05', '2022-11-24 09:58:31'),
(10, 'asd', '1', NULL, '<p>asdas</p>', '1', '0', '1', '0', '0', '0', '1669284593images (4).jpg, 16692845931593193401-fairandlovelyedited.jpg', '20', '5', '400', '2022-11-29', 'asdas', '0', 'middle', 1, 1, '1', '2022-11-24 10:09:53', '2022-11-24 10:09:53'),
(11, 'asd', '1', NULL, '<p>asdas</p>', '1', '0', '1', '0', '0', '0', '1669284593images (4).jpg, 16692845931593193401-fairandlovelyedited.jpg', '20', '5', '400', '2022-11-29', 'asdas', '0', 'middle', 1, 1, '1', '2022-11-24 10:09:53', '2022-11-24 10:09:53');

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
(3, '6', '4', 'Textile fair going upstream', '1', NULL, '<p>The aricle body for testin</p>', '1669613603.webp', 0, 1, '2022-11-28 05:33:23', '2022-11-28 05:33:23'),
(4, '6', '4', 'Helllllllllllllllllllllllllllllllllllllllllllllllllo  check', '1', NULL, '<p><br></p><p><br></p><p>Hello descriotion</p>', '1669625921.jpg', 0, 1, '2022-11-28 08:58:41', '2022-11-28 08:58:41');

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
(4, 'blog', '1', NULL, '2022-11-28 05:25:17', '2022-11-28 05:25:17'),
(5, 'Vlog', '1', NULL, '2022-11-28 05:25:27', '2022-11-28 05:25:27'),
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
(2, '5', 'Travel', '1', NULL, '2022-11-28 05:26:18', '2022-11-28 05:26:18'),
(3, '5', 'Sports', '1', NULL, '2022-11-28 05:26:34', '2022-11-28 05:26:34'),
(4, '6', 'Textile alumni', '1', NULL, '2022-11-28 05:31:51', '2022-11-28 05:31:51');

-- --------------------------------------------------------

--
-- Table structure for table `aussta_events`
--

CREATE TABLE `aussta_events` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `event_type_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `event_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `posted_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `event_description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_person` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `event_time` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `event_date` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `event_fee` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `priority` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_type` tinyint(1) NOT NULL DEFAULT 0,
  `showMobile` tinyint(1) NOT NULL DEFAULT 1,
  `showBanner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `showDesktop` tinyint(1) NOT NULL DEFAULT 1,
  `isArchived` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `aussta_events`
--

INSERT INTO `aussta_events` (`id`, `event_type_id`, `event_title`, `posted_by`, `updated_by`, `event_description`, `contact_person`, `image`, `event_time`, `event_date`, `event_fee`, `priority`, `payment_type`, `showMobile`, `showBanner`, `showDesktop`, `isArchived`, `created_at`, `updated_at`) VALUES
(9, '2', 'dd', '1', NULL, '<p>dd</p>', '1', '1669277680images (4).jpg, 16692776801593193401-fairandlovelyedited.jpg', 'Wed, 23 Nov 2022 18:00:00 GMT', '2022-11-22', '123', 'high', 1, 1, '0', 1, 1, '2022-11-24 08:14:40', '2022-11-24 08:14:40'),
(10, '2', 'our ceremoy vacation', '1', NULL, '<p>asdadasdasdasdasdasd</p>', '1', '1669629189advertising-word-cloud-business-concept-56936998.jpg, 1669629189images.png', 'Sun, 27 Nov 2022 18:05:00 GMT', '2022-11-29', '1', 'high', 1, 1, '1', 1, 0, '2022-11-28 09:53:09', '2022-11-28 09:53:09');

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
(1, 'Picnic', NULL, '2022-11-22 04:01:58', '2022-11-22 04:01:58'),
(2, 'MilonMela', NULL, '2022-11-22 04:02:06', '2022-11-22 04:02:06');

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
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isArchived` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `banner_title`, `posted_by`, `updated_by`, `banner_description`, `image`, `isArchived`, `created_at`, `updated_at`) VALUES
(8, 'hello', '1', '1', 'hello description', '1669706163images.png', 0, '2022-11-29 07:16:04', '2022-11-29 07:16:04');

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
(1, 'Business Automation', NULL, '2022-11-22 03:56:46', '2022-11-22 03:56:46'),
(2, 'Business Development', NULL, '2022-11-22 03:56:57', '2022-11-22 03:56:57'),
(3, 'Hr & Admin', NULL, '2022-11-22 03:57:16', '2022-11-22 03:57:16');

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
(1, '1122284', 'Pakiza Technovation Limited', '2', '1', 'Full Stack Developer', '<div class=\"co8aDb\" aria-level=\"3\" role=\"heading\" style=\"margin-bottom: 12px; color: rgb(32, 33, 36); font-family: arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><strong>Top 10 Tips for Writing an Effective Job Description</strong></div><div class=\"RqBzHd\" style=\"padding: 0px 20px; color: rgb(32, 33, 36); font-family: arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><ul class=\"i8Z77e\" style=\"margin: 0px; padding: 0px;\"><li class=\"TrT0Xe\" style=\"margin: 0px 0px 4px; padding: 0px; list-style-type: disc;\">Choose a Clear, Concise Title for the Position. ...</li><li class=\"TrT0Xe\" style=\"margin: 0px 0px 4px; padding: 0px; list-style-type: disc;\">Paint a Picture of the Position. ...</li><li class=\"TrT0Xe\" style=\"margin: 0px 0px 4px; padding: 0px; list-style-type: disc;\">Describe the Work Environment. ...</li><li class=\"TrT0Xe\" style=\"margin: 0px 0px 4px; padding: 0px; list-style-type: disc;\">Spell Out the Skills That Matter Most to You. ...</li><li class=\"TrT0Xe\" style=\"margin: 0px 0px 4px; padding: 0px; list-style-type: disc;\">Include Any Educational Requirements. ...</li><li class=\"TrT0Xe\" style=\"margin: 0px 0px 4px; padding: 0px; list-style-type: disc;\">Outline Day-to-Day Duties. ...</li><li class=\"TrT0Xe\" style=\"margin: 0px 0px 4px; padding: 0px; list-style-type: disc;\">Watch Your Words. ...</li><li class=\"TrT0Xe\" style=\"margin: 0px 0px 4px; padding: 0px; list-style-type: disc;\">Use Descriptive Adverbs.</li></ul></div>', NULL, '1669089649.webp', '1', NULL, 'on_site', 1, 0, '2022-11-30', '2022-11-22 04:00:49', '2022-11-22 04:00:49'),
(2, '1122671', 'Pakiza technovation', 'Full Time', 'Business Automation', 'IT', 'This job post is for IT position. Applicant must complete his B.Sc.<br>Must knowledge about programming language<br><br>', 'joblink.com', '1669093362.png', '5', NULL, 'On Site', 1, 0, '2022-11-25', '2022-11-22 05:02:42', '2022-11-22 05:02:42');

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
(1, 'Part Time', NULL, '2022-11-22 03:56:16', '2022-11-22 03:56:16'),
(2, 'Full Time', NULL, '2022-11-22 03:56:24', '2022-11-22 03:56:24');

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
(3, '3', '24654', '2022-11-23 10:55:27', '2022-11-23 10:55:27');

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
(171, '2022_11_06_105613_create_notifications_table', 1),
(172, '2022_11_10_121432_create_advertisements_table', 1),
(174, '2022_11_25_191144_create_jobs_table', 2),
(175, '2022_11_26_154815_create_article_blog_categories_table', 2),
(176, '2022_11_26_221755_create_article_blog_sub_categories_table', 2),
(177, '2022_11_27_224237_create_article_blogs_table', 3),
(178, '2022_11_29_095047_create_banners_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_id` bigint(20) UNSIGNED NOT NULL,
  `data` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `type`, `notifiable_type`, `notifiable_id`, `data`, `read_at`, `created_at`, `updated_at`) VALUES
('08c13dd3-455a-429e-afba-8693702d3a0f', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 1, '{\"data\":\"our ceremoy vacation\"}', NULL, '2022-11-28 09:53:23', '2022-11-28 09:53:23'),
('1ce149ed-393f-4d39-9c24-95f6fd693fa0', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 1, '{\"data\":\"dd\"}', NULL, '2022-11-24 08:14:44', '2022-11-24 08:14:44'),
('583622f2-9f35-4755-a40d-ba9102d9a420', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 1, '{\"data\":\"milonmela title\"}', NULL, '2022-11-24 05:31:48', '2022-11-24 05:31:48'),
('6511164b-465a-418f-a4ee-dd963b38884b', 'App\\Notifications\\EventNotification', 'App\\Models\\User', 1, '{\"data\":\"Austtaa 2022 Milon Mela\"}', NULL, '2022-11-22 04:08:08', '2022-11-22 04:08:08');

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
('rakib10ms@gmail.com', '7528226', '2022-11-22 05:58:15');

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
(46, 'App\\Models\\User', 1, 'rakib10ms@gmail.com', '7b99755f1af0ce5c8da086d6edcc2aca36ebd79143955127dbbaf2a20554b414', '[\"*\"]', '2022-11-29 07:16:04', NULL, '2022-11-29 06:10:17', '2022-11-29 07:16:04'),
(47, 'App\\Models\\User', 1, 'rakib10ms@gmail.com', 'd4bd8f574e6e5c303a73a50a70b428bba09f204364c06743090fd68c421e9666', '[\"*\"]', NULL, NULL, '2022-11-29 07:00:43', '2022-11-29 07:00:43');

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
(1, 'Emergency', NULL, 'administrator,moderator,alumni,stuff', '2022-11-22 04:01:09', '2022-11-22 04:01:09'),
(2, 'Donation', NULL, 'administrator,moderator,alumni,stuff,administrator,moderator,alumni,stuff', '2022-11-22 04:01:27', '2022-11-22 04:01:27');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nick_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `batch` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `blood_group` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stream` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_sector` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_sub_sector` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `office_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `office_address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name_of_company` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `present_address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `permanent_address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `otp_verify` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `device_token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `confirm_password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `nick_name`, `email`, `phone_no`, `batch`, `blood_group`, `stream`, `user_role`, `job_sector`, `job_sub_sector`, `office_email`, `office_address`, `name_of_company`, `present_address`, `permanent_address`, `image`, `email_verified_at`, `otp_verify`, `device_token`, `password`, `confirm_password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Md Rakib Hossain', 'Rakib', 'rakib10ms@gmail.com', '01312275804', '2020', 'Ab+', 'Stream', '1', 'Engineering', 'It', 'rakib.ba@ptvl.com', 'Khan Abc,20,Dhanmondi,Dhaka -1230', 'Pakiza Technovation Limited', 'Kudar Bazar,Muradpur,Kadamtoli,Jatrabari,Dhaka-1201', 'Enayetpur,Raypur,Lakhsmipur,Chittagong', '1669089332.webp', NULL, NULL, 'eRBRgGvhSnmMLThi20zHMN:APA91bE2Kyz5CMO4SE30RLpdMaS0NYfzc4JHIUsxSxPRr_QkbOVTNWsIvscEn5LOjYJgAdxs5MNK3RAN8g5lMjaIyGy2cu9Xttx8IldldQu8RG6t2ftyTAgH5jKMiETXnwLnEf0QubsC', '$2y$10$eg5oqb/Kh5cBcdW5o/vP0u4zzdemvv9Ts0.UpcF8oe4SHl0Pdaj7K', '$2y$10$k2CGQsv5aAerx4lkDjqSV.1icYXq1hUL1Ac2cTjP41Q4Qwd9r5VPu', NULL, '2022-11-22 03:55:32', '2022-11-29 07:00:43'),
(2, 'Rakib 2', 'Rakib2', 'rakibtech9@gmail.com', '01778749543', '2020', 'Ab+', 'Stream', '1', 'Engineering', 'It', 'rakib.ba@ptvl.com', 'Khan Abc,20,Dhanmondi,Dhaka -1230', 'Pakiza Technovation Limited', 'Kudar Bazar,Muradpur,Kadamtoli,Jatrabari,Dhaka-1201', 'Enayetpur,Raypur,Lakhsmipur,Chittagong', '1669109466.webp', NULL, NULL, NULL, '$2y$10$TTaF3GO9fqJootBROqFcreyptAhJYREdFk4tSEovIZ0sTR5lvJxMm', '$2y$10$Ev.viGqjONRm8yfGJeU4kOpLW4pCxPmhdV8352SMOcO6gvxzIuAZC', NULL, '2022-11-22 09:31:06', '2022-11-22 09:31:06'),
(3, 'hasan', 'hasan', 'hasan@gmail.com', '+93123344', '2016', 'B+', 'hasan@gmail.com', '1', 'eere', 'rerer', 'hasan!@gmail.com', 'ssdsd', 'sdsdsdsd', 'sdsdsd', 'ssdsdsd', '1669200927.jpg', NULL, NULL, NULL, '$2y$10$1U6ru2VDAvBfhd0W8BFQzOlllcowaNXlDCVvr4VtlLmpDPsl8.KpO', '$2y$10$WCuzGHucjtrkIq2VKKEsU.j5ytwvUGBrG33.ICpme7oySxXUswlPK', NULL, '2022-11-23 10:55:27', '2022-11-23 10:55:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advertisements`
--
ALTER TABLE `advertisements`
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
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

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
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_phone_no_unique` (`phone_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advertisements`
--
ALTER TABLE `advertisements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `article_blogs`
--
ALTER TABLE `article_blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `article_blog_categories`
--
ALTER TABLE `article_blog_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `article_blog_sub_categories`
--
ALTER TABLE `article_blog_sub_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `aussta_events`
--
ALTER TABLE `aussta_events`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `austta_event_types`
--
ALTER TABLE `austta_event_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `job_posts`
--
ALTER TABLE `job_posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `job_types`
--
ALTER TABLE `job_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `login_email_otps`
--
ALTER TABLE `login_email_otps`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=179;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

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
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
