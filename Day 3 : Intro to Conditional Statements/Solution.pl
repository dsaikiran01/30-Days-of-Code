#!/usr/bin/perl

use strict;
use warnings;

my $N = <STDIN>;

if ($N % 2 != 0) {
    print "Weird";
} elsif ($N % 2 == 0 && $N >= 2 && $N <= 5) {
    print "Not Weird";
} elsif ($N % 2 == 0 && $N >= 6 && $N <= 20) {
    print "Weird";
} elsif ($N % 2 == 0 && $N > 20) {
    print "Not Weird";
}