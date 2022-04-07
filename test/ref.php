<?php

var_dump(mb_strimwidth('1234567890', 0, 9, '...'));
var_dump(mb_strimwidth('1234567890', 0, 10, '...'));
var_dump(mb_strimwidth('1234567890', 0, 11, '...'));

var_dump(mb_strimwidth('𩸽定食が食べたい😆', 0, 14, '...'));
var_dump(mb_strimwidth('𩸽定食が食べたい😆', 0, 15, '...'));
var_dump(mb_strimwidth('𩸽定食が食べたい😆', 0, 16, '...'));
var_dump(mb_strimwidth('𩸽定食が食べたい😆', 0, 17, '...'));
var_dump(mb_strimwidth('𩸽定食が食べたい😆', 0, 18, '...'));

var_dump(mb_strwidth('👩‍👩‍👧'));
var_dump(mb_strwidth('👩‍👩‍👧'));
var_dump(mb_strwidth('👩‍👩‍👧'));
var_dump(mb_strimwidth('👩‍👩‍👧😆😷🧝‍♂️🫄✋✊😱😓', 0, 14, '💔'));
var_dump(mb_strimwidth('👩‍👩‍👧😆😷🧝‍♂️🫄✋✊😱😓', 0, 15, '💔'));
var_dump(mb_strimwidth('👩‍👩‍👧😆😷🧝‍♂️🫄✋✊😱😓', 0, 16, '💔'));
