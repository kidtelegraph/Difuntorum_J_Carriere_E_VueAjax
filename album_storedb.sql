-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8080
-- Generation Time: Mar 08, 2024 at 12:58 PM
-- Server version: 5.7.34
-- PHP Version: 8.0.8

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Database: album_store

-- Table structure for table artists

CREATE TABLE artists (
  id int(11) NOT NULL,
  name varchar(255) NOT NULL,
  genre varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table artists

INSERT INTO artists (id, name, genre) VALUES
(1, 'The Beatles', 'Pop/Rock'),
(2, 'Michael Jackson', 'Pop'),
(3, 'Autumn!', 'HipHop/RnB'),
(4, 'Pierre Bourne', 'HipHop/RnB'),
(5, 'Frank Ocean', 'RnB/Soul'),
(6, 'Lucki', 'Cloud Rap'),
(7, 'Bladee', 'Experimental HipHop'),
(8, 'Prince', 'Rock/Alternative'),
(9, 'Odd Future', 'HipHop/RnB'),
(10, 'Pink Floyd', 'Rock/Alternative');

-- Table structure for table albums

CREATE TABLE albums (
  id int(11) NOT NULL,
  title varchar(255) NOT NULL,
  artist_id int(11) NOT NULL,
  release_date date NOT NULL,
  album_image varchar(125) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table albums

INSERT INTO albums (id, title, artist_id, release_date, album_image) VALUES
(1, 'Abbey Road', 1, '1969-09-26', 'abbey_road.png'),
(2, 'Thriller', 2, '1982-11-30', 'thriller.png'),
(3, 'Midnight Club', 3, '2023-08-22', 'midnight_club.png'),
(4, 'The Life of Pierre Bourne', 4, '2021-05-11', 'tlop5.png'),
(5, 'Blonde', 5, '2016-08-20', 'blonde.png'),
(6, 'Freewave 3', 6, '2019-02-15', 'freewave3.png'),
(7, 'Icedancer', 7, '1972-06-16', 'icedancer.png'),
(8, 'Purple Rain', 8, '1984-06-25', 'purple_rain.png'),
(9, 'The OF Tape Vol.2', 9, '2012-03-16', 'oftape2.png'),
(10, 'Graduation', 10, '2007-09-11', 'graduation.png');

-- Indexes for table artists
ALTER TABLE artists
  ADD PRIMARY KEY (id);

-- Indexes for table albums
ALTER TABLE albums
  ADD PRIMARY KEY (id);

-- AUTO_INCREMENT for tables

-- AUTO_INCREMENT for table artists
ALTER TABLE artists
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

-- AUTO_INCREMENT for table albums
ALTER TABLE albums
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;
  
SET FOREIGN_KEY_CHECKS=1;
COMMIT;