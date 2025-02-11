function acronym(string) {
  let returnAcronym = string.split(/[ -]/).map(word => word[0].toUpperCase()).join('');
  console.log(returnAcronym);
  return returnAcronym;
}

acronym('Portable Network Graphics');                  // "PNG"
acronym('First In, First Out');                        // "FIFO"
acronym('PHP: HyperText Preprocessor');                // "PHP"
acronym('Complementary metal-oxide semiconductor');    // "CMOS"
acronym('Hyper-text Markup Language');                 // "HTML"