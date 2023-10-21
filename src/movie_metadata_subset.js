const jsonData = `
[{"movie_title":"Molly ","director_name":"John Duigan","actor_1_name":"Elaine Hendrix","actor_2_name":"Jill Hennessy","title_year":"1999.0","duration":"102.0"},{"movie_title":"May ","director_name":"Lucky McKee","actor_1_name":"James Duval","actor_2_name":"Will Estes","title_year":"2002.0","duration":"93.0"},{"movie_title":"Earth to Echo ","director_name":"Dave Green","actor_1_name":"Teo Halm","actor_2_name":"Ella Wahlestedt","title_year":"2014.0","duration":"91.0"},{"movie_title":"Motherhood ","director_name":"Katherine Dieckmann","actor_1_name":"Stephanie Szostak","actor_2_name":"Minnie Driver","title_year":"2009.0","duration":"90.0"},{"movie_title":"You Can't Take It with You ","director_name":"Frank Capra","actor_1_name":"Jean Arthur","actor_2_name":"Ann Miller","title_year":"1938.0","duration":"126.0"},{"movie_title":"The Canyons ","director_name":"Paul Schrader","actor_1_name":"Nolan Gerard Funk","actor_2_name":"Gus Van Sant","title_year":"2013.0","duration":"99.0"},{"movie_title":"The City of Your Final Destination ","director_name":"James Ivory","actor_1_name":"Alexandra Maria Lara","actor_2_name":"Omar Metwally","title_year":"2009.0","duration":"117.0"},{"movie_title":"Unfinished Business ","director_name":"Ken Scott","actor_1_name":"Tom Wilkinson","actor_2_name":"June Diane Raphael","title_year":"2015.0","duration":"91.0"},{"movie_title":"The Other End of the Line ","director_name":"James Dodson","actor_1_name":"Larry Miller","actor_2_name":"Anupam Kher","title_year":"2008.0","duration":"106.0"},{"movie_title":"11:14 ","director_name":"Greg Marcks","actor_1_name":"Henry Thomas","actor_2_name":"Barbara Hershey","title_year":"2003.0","duration":"85.0"},{"movie_title":"Iris ","director_name":"Richard Eyre","actor_1_name":"Kate Winslet","actor_2_name":"Jim Broadbent","title_year":"2001.0","duration":"91.0"},{"movie_title":"Hitman ","director_name":"Xavier Gens","actor_1_name":"Henry Ian Cusick","actor_2_name":"Dougray Scott","title_year":"2007.0","duration":"94.0"},{"movie_title":"The Perfect Game ","director_name":"William Dear","actor_1_name":"Clifton Collins Jr.","actor_2_name":"Cheech Marin","title_year":"2009.0","duration":"118.0"},{"movie_title":"Vampire in Brooklyn ","director_name":"Wes Craven","actor_1_name":"John Witherspoon","actor_2_name":"W. Earl Brown","title_year":"1995.0","duration":"100.0"},{"movie_title":"The Fast and the Furious ","director_name":"Rob Cohen","actor_1_name":"Paul Walker","actor_2_name":"Vin Diesel","title_year":"2001.0","duration":"106.0"},{"movie_title":"Kiss the Girls ","director_name":"Gary Fleder","actor_1_name":"Morgan Freeman","actor_2_name":"Tony Goldwyn","title_year":"1997.0","duration":"115.0"},{"movie_title":"Miss Julie ","director_name":"Liv Ullmann","actor_1_name":"Samantha Morton","actor_2_name":"Jessica Chastain","title_year":"2014.0","duration":"129.0"},{"movie_title":"Max Keeble's Big Move ","director_name":"Tim Hill","actor_1_name":"Noel Fisher","actor_2_name":"Amber Valletta","title_year":"2001.0","duration":"91.0"},{"movie_title":"The Jungle Book ","director_name":"Jon Favreau","actor_1_name":"Scarlett Johansson","actor_2_name":"Bill Murray","title_year":"2016.0","duration":"106.0"},{"movie_title":"Thor ","director_name":"Kenneth Branagh","actor_1_name":"Chris Hemsworth","actor_2_name":"Natalie Portman","title_year":"2011.0","duration":"115.0"},{"movie_title":"Under Siege 2: Dark Territory ","director_name":"Geoff Murphy","actor_1_name":"Peter Greene","actor_2_name":"Brenda Bakke","title_year":"1995.0","duration":"92.0"},{"movie_title":"Perfect Cowboy ","director_name":"Ken Roht","actor_1_name":"Charla Cochran","actor_2_name":"Joe Lev","title_year":"2014.0","duration":"109.0"},{"movie_title":"Godzilla Resurgence ","director_name":"Hideaki Anno","actor_1_name":"Mark Chinnery","actor_2_name":"Shin'ya Tsukamoto","title_year":"2016.0","duration":"120.0"},{"movie_title":"Skyline ","director_name":"Colin Strause","actor_1_name":"David Zayas","actor_2_name":"Donald Faison","title_year":"2010.0","duration":"97.0"},{"movie_title":"The Sixth Sense ","director_name":"M. Night Shyamalan","actor_1_name":"Bruce Willis","actor_2_name":"Haley Joel Osment","title_year":"1999.0","duration":"107.0"},{"movie_title":"Unknown ","director_name":"Jaume Collet-Serra","actor_1_name":"Liam Neeson","actor_2_name":"Frank Langella","title_year":"2011.0","duration":"113.0"},{"movie_title":"Transformers: Dark of the Moon ","director_name":"Michael Bay","actor_1_name":"Glenn Morshower","actor_2_name":"Lester Speight","title_year":"2011.0","duration":"154.0"},{"movie_title":"The Shawshank Redemption ","director_name":"Frank Darabont","actor_1_name":"Morgan Freeman","actor_2_name":"Jeffrey DeMunn","title_year":"1994.0","duration":"142.0"},{"movie_title":"The Spiderwick Chronicles ","director_name":"Mark Waters","actor_1_name":"Martin Short","actor_2_name":"Tod Fennell","title_year":"2008.0","duration":"107.0"},{"movie_title":"Outside Bet ","director_name":"Sacha Bennett","actor_1_name":"Bob Hoskins","actor_2_name":"Jenny Agutter","title_year":"2012.0","duration":"101.0"},{"movie_title":"Trance ","director_name":"Danny Boyle","actor_1_name":"Rosario Dawson","actor_2_name":"Spencer Wilding","title_year":"2013.0","duration":"101.0"},{"movie_title":"The Longest Day ","director_name":"Ken Annakin","actor_1_name":"Richard Burton","actor_2_name":"Richard Beymer","title_year":"1962.0","duration":"178.0"},{"movie_title":"Hav Plenty ","director_name":"Christopher Scott Cherot","actor_1_name":"Hill Harper","actor_2_name":"Robinne Lee","title_year":"1997.0","duration":"84.0"},{"movie_title":"Housebound ","director_name":"Gerard Johnstone","actor_1_name":"Morgana O'Reilly","actor_2_name":"Bruce Hopkins","title_year":"2014.0","duration":"107.0"},{"movie_title":"A Tale of Three Cities ","director_name":"Mabel Cheung","actor_1_name":"Wei Tang","actor_2_name":"Ching Wan Lau","title_year":"2015.0","duration":"130.0"},{"movie_title":"All Good Things ","director_name":"Andrew Jarecki","actor_1_name":"Ryan Gosling","actor_2_name":"Kirsten Dunst","title_year":"2010.0","duration":"101.0"},{"movie_title":"Agent Cody Banks 2: Destination London ","director_name":"Kevin Allen","actor_1_name":"Daniel Roebuck","actor_2_name":"Frankie Muniz","title_year":"2004.0","duration":"100.0"},{"movie_title":"Return to Me ","director_name":"Bonnie Hunt","actor_1_name":"Minnie Driver","actor_2_name":"Jim Belushi","title_year":"2000.0","duration":"115.0"},{"movie_title":"Holes ","director_name":"Andrew Davis","actor_1_name":"Tim Blake Nelson","actor_2_name":"Zane Holtz","title_year":"2003.0","duration":"117.0"},{"movie_title":"Our Idiot Brother ","director_name":"Jesse Peretz","actor_1_name":"Zooey Deschanel","actor_2_name":"Adam Scott","title_year":"2011.0","duration":"90.0"},{"movie_title":"The Devil Wears Prada ","director_name":"David Frankel","actor_1_name":"Meryl Streep","actor_2_name":"Anne Hathaway","title_year":"2006.0","duration":"109.0"},{"movie_title":"Half Baked ","director_name":"Tamra Davis","actor_1_name":"Dave Chappelle","actor_2_name":"Harland Williams","title_year":"1998.0","duration":"82.0"},{"movie_title":"The Abyss ","director_name":"James Cameron","actor_1_name":"Michael Biehn","actor_2_name":"Todd Graff","title_year":"1989.0","duration":"171.0"},{"movie_title":"The Last of the Mohicans ","director_name":"Michael Mann","actor_1_name":"Wes Studi","actor_2_name":"Terry Kinney","title_year":"1992.0","duration":"117.0"},{"movie_title":"The Girl on the Train ","director_name":"André Téchiné","actor_1_name":"Catherine Deneuve","actor_2_name":"Ronit Elkabetz","title_year":"2009.0","duration":"105.0"},{"movie_title":"Blue Car ","director_name":"Karen Moncrieff","actor_1_name":"Frances Fisher","actor_2_name":"Agnes Bruckner","title_year":"2002.0","duration":"88.0"},{"movie_title":"Leatherheads ","director_name":"George Clooney","actor_1_name":"Robert Baker","actor_2_name":"Malcolm Goodwin","title_year":"2008.0","duration":"114.0"},{"movie_title":"Prince of Persia: The Sands of Time ","director_name":"Mike Newell","actor_1_name":"Jake Gyllenhaal","actor_2_name":"Richard Coyle","title_year":"2010.0","duration":"116.0"},{"movie_title":"Blended ","director_name":"Frank Coraci","actor_1_name":"Bella Thorne","actor_2_name":"Adam Sandler","title_year":"2014.0","duration":"117.0"},{"movie_title":"The Front Page ","director_name":"Billy Wilder","actor_1_name":"Austin Pendleton","actor_2_name":"Harold Gould","title_year":"1974.0","duration":"105.0"},{"movie_title":"Peaceful Warrior ","director_name":"Victor Salva","actor_1_name":"Scott Mechlowicz","actor_2_name":"Tim DeKay","title_year":"2006.0","duration":"120.0"},{"movie_title":"Bandits ","director_name":"Barry Levinson","actor_1_name":"Bruce Willis","actor_2_name":"Brían F. O'Byrne","title_year":"2001.0","duration":"123.0"},{"movie_title":"The Karate Kid ","director_name":"John G. Avildsen","actor_1_name":"Martin Kove","actor_2_name":"William Zabka","title_year":"1984.0","duration":"126.0"},{"movie_title":"McFarland USA","director_name":"Niki Caro","actor_1_name":"Morgan Saylor","actor_2_name":"Valente Rodriguez","title_year":"2015.0","duration":"129.0"},{"movie_title":"Philomena ","director_name":"Stephen Frears","actor_1_name":"Steve Coogan","actor_2_name":"Mare Winningham","title_year":"2013.0","duration":"98.0"},{"movie_title":"Boyhood ","director_name":"Richard Linklater","actor_1_name":"Ellar Coltrane","actor_2_name":"Lorelei Linklater","title_year":"2014.0","duration":"165.0"},{"movie_title":"Lucy ","director_name":"Luc Besson","actor_1_name":"Scarlett Johansson","actor_2_name":"Morgan Freeman","title_year":"2014.0","duration":"89.0"},{"movie_title":"Hardflip ","director_name":"Johnny Remo","actor_1_name":"Matthew Ziff","actor_2_name":"Randy Wayne","title_year":"2012.0","duration":"112.0"},{"movie_title":"Daddy's Home ","director_name":"Sean Anders","actor_1_name":"Will Ferrell","actor_2_name":"Linda Cardellini","title_year":"2015.0","duration":"96.0"},{"movie_title":"In Her Line of Fire ","director_name":"Brian Trenchard-Smith","actor_1_name":"David Keith","actor_2_name":"Mariel Hemingway","title_year":"2006.0","duration":"88.0"},{"movie_title":"Volver ","director_name":"Pedro Almodóvar","actor_1_name":"Carmen Maura","actor_2_name":"Lola Dueñas","title_year":"2006.0","duration":"121.0"},{"movie_title":"Anastasia ","director_name":"Don Bluth","actor_1_name":"Kirsten Dunst","actor_2_name":"Kelsey Grammer","title_year":"1997.0","duration":"94.0"},{"movie_title":"A View to a Kill ","director_name":"John Glen","actor_1_name":"Patrick Macnee","actor_2_name":"Alison Doody","title_year":"1985.0","duration":"131.0"},{"movie_title":"Dry Spell ","director_name":"Travis Legge","actor_1_name":"Kristen Seavey","actor_2_name":"Suzi Lorraine","title_year":"2013.0","duration":"90.0"},{"movie_title":"Jack Reacher ","director_name":"Christopher McQuarrie","actor_1_name":"Tom Cruise","actor_2_name":"Robert Duvall","title_year":"2012.0","duration":"130.0"},{"movie_title":"Hugo ","director_name":"Martin Scorsese","actor_1_name":"Chloë Grace Moretz","actor_2_name":"Christopher Lee","title_year":"2011.0","duration":"126.0"},{"movie_title":"Vessel ","director_name":"Clark Baker","actor_1_name":"Taylor Pigeon","actor_2_name":"Alan Pietruszewski","title_year":"2012.0","duration":"14.0"},{"movie_title":"Playing for Keeps ","director_name":"Gabriele Muccino","actor_1_name":"Gerard Butler","actor_2_name":"Dennis Quaid","title_year":"2012.0","duration":"105.0"},{"movie_title":"The One ","director_name":"James Wong","actor_1_name":"Jason Statham","actor_2_name":"Jet Li","title_year":"2001.0","duration":"85.0"},{"movie_title":"Mystic Pizza ","director_name":"Donald Petrie","actor_1_name":"Julia Roberts","actor_2_name":"Lili Taylor","title_year":"1988.0","duration":"104.0"},{"movie_title":"AVP: Alien vs. Predator ","director_name":"Paul W.S. Anderson","actor_1_name":"Sanaa Lathan","actor_2_name":"Colin Salmon","title_year":"2004.0","duration":"109.0"},{"movie_title":"Valley of the Heart's Delight ","director_name":"Tim Boxell","actor_1_name":"Bruce McGill","actor_2_name":"Diana Scarwid","title_year":"2006.0","duration":"100.0"},{"movie_title":"The Past is a Grotesque Animal ","director_name":"Jason Miller","actor_1_name":"Jon Brion","actor_2_name":"Dottie Alexander","title_year":"2014.0","duration":"77.0"},{"movie_title":"Outside Providence ","director_name":"Michael Corrente","actor_1_name":"Jonathan Brandis","actor_2_name":"George Wendt","title_year":"1999.0","duration":"96.0"},{"movie_title":"The Heart of Me ","director_name":"Thaddeus O'Sullivan","actor_1_name":"Olivia Williams","actor_2_name":"Luke Newberry","title_year":"2002.0","duration":"96.0"},{"movie_title":"Forrest Gump ","director_name":"Robert Zemeckis","actor_1_name":"Tom Hanks","actor_2_name":"Siobhan Fallon Hogan","title_year":"1994.0","duration":"142.0"},{"movie_title":"Goal! The Dream Begins ","director_name":"Danny Cannon","actor_1_name":"Sean Pertwee","actor_2_name":"Kuno Becker","title_year":"2005.0","duration":"118.0"},{"movie_title":"The Aviator ","director_name":"Martin Scorsese","actor_1_name":"Leonardo DiCaprio","actor_2_name":"Adam Scott","title_year":"2004.0","duration":"170.0"},{"movie_title":"The Queen ","director_name":"Stephen Frears","actor_1_name":"Roger Allam","actor_2_name":"Sylvia Syms","title_year":"2006.0","duration":"94.0"},{"movie_title":"Born to Fly: Elizabeth Streb vs. Gravity ","director_name":"Catherine Gund","actor_1_name":"Elizabeth Streb","actor_2_name":"Sarah Callan","title_year":"2014.0","duration":"82.0"},{"movie_title":"Good Kill ","director_name":"Andrew Niccol","actor_1_name":"Bruce Greenwood","actor_2_name":"Zoë Kravitz","title_year":"2014.0","duration":"102.0"},{"movie_title":"Romeo Is Bleeding ","director_name":"Peter Medak","actor_1_name":"Gary Oldman","actor_2_name":"Michael Wincott","title_year":"1993.0","duration":"100.0"},{"movie_title":"The Cell ","director_name":"Tarsem Singh","actor_1_name":"Dylan Baker","actor_2_name":"Jake Weber","title_year":"2000.0","duration":"109.0"},{"movie_title":"Death Race 2000 ","director_name":"Paul Bartel","actor_1_name":"Sylvester Stallone","actor_2_name":"David Carradine","title_year":"1975.0","duration":"80.0"},{"movie_title":"The Three Musketeers ","director_name":"Paul W.S. Anderson","actor_1_name":"Milla Jovovich","actor_2_name":"Logan Lerman","title_year":"2011.0","duration":"110.0"},{"movie_title":"Resident Evil: Afterlife ","director_name":"Paul W.S. Anderson","actor_1_name":"Milla Jovovich","actor_2_name":"Boris Kodjoe","title_year":"2010.0","duration":"97.0"},{"movie_title":"Welcome to Collinwood ","director_name":"Anthony Russo","actor_1_name":"Michael Jeter","actor_2_name":"Isaiah Washington","title_year":"2002.0","duration":"86.0"},{"movie_title":"Strangerland ","director_name":"Kim Farrant","actor_1_name":"Nicholas Hamilton","actor_2_name":"Reef Ireland","title_year":"2015.0","duration":"112.0"},{"movie_title":"Lady in White ","director_name":"Frank LaLoggia","actor_1_name":"Alex Rocco","actor_2_name":"Lukas Haas","title_year":"1988.0","duration":"118.0"},{"movie_title":"Teenage Mutant Ninja Turtles II: The Secret of the Ooze ","director_name":"Michael Pressman","actor_1_name":"Kevin Nash","actor_2_name":"Paige Turco","title_year":"1991.0","duration":"88.0"},{"movie_title":"Oz the Great and Powerful ","director_name":"Sam Raimi","actor_1_name":"Tim Holmes","actor_2_name":"Mila Kunis","title_year":"2013.0","duration":"130.0"},{"movie_title":"How to Be Single ","director_name":"Christian Ditter","actor_1_name":"Alison Brie","actor_2_name":"Damon Wayans Jr.","title_year":"2016.0","duration":"110.0"},{"movie_title":"The Birth of a Nation ","director_name":"Nate Parker","actor_1_name":"Jason Stuart","actor_2_name":"Nate Parker","title_year":"2016.0","duration":"120.0"},{"movie_title":"Red Eye ","director_name":"Wes Craven","actor_1_name":"Robert Pine","actor_2_name":"Carl Gilliard","title_year":"2005.0","duration":"85.0"},{"movie_title":"Peace Propaganda & the Promised Land","director_name":"Sut Jhally","actor_1_name":"Noam Chomsky","actor_2_name":"Seth Ackerman","title_year":"2004.0","duration":"80.0"},{"movie_title":"The Crying Game ","director_name":"Neil Jordan","actor_1_name":"Jim Broadbent","actor_2_name":"Miranda Richardson","title_year":"1992.0","duration":"112.0"},{"movie_title":"The Golden Child ","director_name":"Michael Ritchie","actor_1_name":"Victor Wong","actor_2_name":"Randall 'Tex' Cobb","title_year":"1986.0","duration":"94.0"},{"movie_title":"The Huntsman: Winter's War ","director_name":"Cedric Nicolas-Troyan","actor_1_name":"Chris Hemsworth","actor_2_name":"Sam Claflin","title_year":"2016.0","duration":"120.0"},{"movie_title":"Edward Scissorhands ","director_name":"Tim Burton","actor_1_name":"Johnny Depp","actor_2_name":"Dianne Wiest","title_year":"1990.0","duration":"105.0"},{"movie_title":"Kiss Kiss Bang Bang ","director_name":"Shane Black","actor_1_name":"Robert Downey Jr.","actor_2_name":"Corbin Bernsen","title_year":"2005.0","duration":"103.0"}]`