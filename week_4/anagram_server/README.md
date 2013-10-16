Anagram Server
----------------

This application finds anagrams for a given word based on the terms in a PostgreSQL database seeded from a text file.  Uses an ActiveRecord callback before saving a term in the dictionary to store an alphabetically sorted version of the word for quicker anagram queries.