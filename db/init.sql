drop table if exists houses;

create table if not exists houses(
    id serial primary key,
    name text,
    address text,
    city text,
    state text,
    morgage int,
    rent int,
    url text
);

insert into houses
(name, address, city, state, morgage, rent, url)
values
('House One', '123 Cool Ln', 'city one', 'AZ', 100000, 100, 'http://justcope.co/wp-content/uploads/2018/03/beautiful-house-pictures-nice-small-houses-beautiful-house-plans-with-photos-best-houses-ideas-on-homes-nice-houses-and-beautiful-house-image-in-bangladesh.jpg'),
('House Two', '456 Fun way', 'city two', 'AZ', 200000, 200, 'http://www.whitehouse51.com/pic/www.reallynicehouses.com/wp-content/uploads/IMG_1395.jpg'),
('House Three', '789 Road rd', 'city three', 'AZ', 300000, 300, 'http://www.whitehouse51.com/pic/2.bp.blogspot.com/-q4Kp5BsC7Ek/Vfa2L0LqDxI/AAAAAAAAygQ/LQhOYW1QS9Q/s1600/luxururious-kerala-contemporary-home.jpg');

select * from houses;



--test data
-- {
-- 	"name": "TEST",
-- 	"address": "TEST",
-- 	"city":  "TEST",
-- 	"state":  "TEST",
-- 	"morgage":  10,
-- 	"rent": 10,
-- 	"url": "TEST"
-- }