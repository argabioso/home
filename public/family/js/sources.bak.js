// Age for Mothers (youngest ever was 9) so let's use 10
// Age for Fathers (youngest ever was 5) so let's use 6

// Birth estimates
// Lolo Bio = Estimate birth year from Death Certificate and age
// Lola Estebana = Estimate birth year from Death Certificate and age
// Lola Francisca
//   = Birth was 10 years from earliest daughter birth year estimate
//   = Death was 4 years after Lolo Marcial's birth (Lolo Marcial is youngest)
// Lolo Ligorio = Estimate birth year from Death Certificate and age
// Lolo Don Miguel = Estimate death is 10 months before Lolo Sotero was born
// Lolo Guillermo Maramba = Estimate birth from Lolo Miguel's birth - 6
// Lola Maria Baustista = Estimate birth from Lolo Miguel's birth - 10

// Lolo Felomino = Estimate birth year from Death Certificate and age
// Lola Consuelo Ladera
//   = Estimate birth from Lolo Nestor's birth - 10
//   = Estimate death is any time after Lolo Felomino's death
// Lolo Napoleon
//   = Estimate birth from Tita Mylen's birth - 6
//   = Estimate death is time after Tita Cecil was born
// Lola Enoria
//   = Estimate birth from Mamang's birth - 10
//   = Estimate death is time after Mitch reached 3 years old
// Lola Leoncia = Estimate birth year from Death record and age
// Lolo Manuel Ajesta
//   = Birth is 6 years before known children's birth
//   = Death is time after known children's birth
// Ursula Badoles
//   = Birth is 10 years before known children's birth
//   = Death is time after known children's birth
// Unknown name = Death date is after photo taken

const SOURCES = {
  'Present and Direct Interactions': [
    'GHB5-TWN:birthDate',
    'GHB5-TWN:firstName',
    'GHB5-TWN:gender',
    'GHB5-TWN:lastName',
    'GHB5-TWN:middleName',
    'GQX8-CQP:birthDate',
    'GQX8-CQP:firstName',
    'GQX8-CQP:gender',
    'GQX8-CQP:lastName',
    'GQX8-CQP:middleName',
    'TEMP-000:GHB5-TWN:parentChild', // aesthetic data consideration
    'TEMP-000:GQX8-CQP:parentChild', // aesthetic data consideration
    'GQJK-LCT:birthPlace',
    'GQX8-CQP:marker',
    'GQJK-G8W:marker',
    'GQJK-L51:marker',
    'GHBZ-YVX:marker',
    'GHB5-XTZ:marker',
    'GHBR-FK3:marker',
    'GHBR-FK3:marker2',
  ],
  // Should only be used on ancestors with living children
  // since this type of source would have a bigger "mistake chance"
  // as the generation gets older (Family Tree started on March 2020)
  // DO NOT CHANGE THIS SOURCE, IT IS USED DIRECTLY IN checks.js
  'SENTIMENTS OF LIVING RELATIVES': [
    // Everyone in the chat group of Lolo Bio's descendants say that
    // he was born in Majayjay Laguna. Same goes for Lola Estebana
    'GHBZ-TM4:birthPlace',
    'GHB8-RCH:birthPlace',

    // From Tita Susan (child of Lola Catalina)
    'GHBD-7M4:marker',

    // Directly from Nanay (child of Lola Catalina)
    'GHB8-J1B:birthDate',
    'GHB8-J1B:deathDate',
    'GHB8-J1B:birthPlace',

    // Directly from Tito Darne (child of Lolo Nestor)
    'GH12-SVQ:birthPlace',

    // Directly from Tito Dak (grandson of Lola Nati)
    'GHB8-DXY:marker',

    // Directly from Lolo Marcial (son of Lola Francisca)
    'GHBZ-P5Q:living',

    // Directly from Lola Lydia and Lolo Boning (children of Lolo Andong)
    'GHB8-7T6:birthDate',
    'GHB8-7T6:birthPlace',
    'GHB8-7T6:deathDate',
    'GHB8-7T6:deathPlace',
    'GHB8-7T6:living',
    'GHB8-7T6:marker',
    'GHB8-7T6:middleName',

    // Directly from Lola Lydia and Lolo Boning (children of Lolo Andong)
    'GHB8-GZL:birthDate',
    'GHB8-GZL:birthPlace',
    'GHB8-GZL:deathDate',
    'GHB8-GZL:deathPlace',
    'GHB8-GZL:lastName',
    'GHB8-GZL:living',
    'GHB8-GZL:middleName',

    // Directly from Lola Lydia (granddaughter of Lolo Estanislao and Lola Adela)
    'GNNH-JLM:firstName',
    'GNNH-JLM:lastName',
    'GNNH-JLM:gender',
    'GNNH-JLM:GHB8-7T6:parentChild',
    'GJJX-1SG:firstName',
    'GJJX-1SG:lastName',
    'GJJX-1SG:gender',
    'GJJX-1SG:GHB8-7T6:parentChild',
    'GNNH-JLM:GJJX-1SG:partner',

    // Directly from Lola Lydia (granddaughter of Lolo Victor and Lola Genoveba)
    'GHB8-M8D:firstName',
    'GHB8-M8D:lastName',
    'GHB8-M8D:gender',
    'GHB8-M8D:GHB8-GZL:parentChild',
    'GHB8-M86:firstName',
    'GHB8-M86:lastName',
    'GHB8-M86:gender',
    'GHB8-M86:GHB8-GZL:parentChild',
    'GHB8-M8D:GHB8-M86:partner',

    // Directly from Tito Darne (grandson)
    'GH12-DRN:firstName',
    'GH12-DRN:lastName',
    'GH12-3GN:firstName',
    'GH12-3GN:lastName',
    'GH12-9JZ:firstName',
    'GH12-9JZ:lastName',
    'GH12-35H:firstName',
    'GH12-35H:lastName',

    // Directly from Tito Darne (grandson)
    'GH12-XX4:firstName',
    'GH12-XX4:lastName',
    'GH12-HQN:firstName',
    'GH12-HQN:lastName',
    'GH12-6YL:firstName',
    'GH12-6YL:lastName',
    'GH12-DD8:firstName',
    'GH12-DD8:lastName',

    // Directly from Tita Mylen (daughter)
    'GH12-Z3C:living',
  ],
  // Usual suffix verification
  "Son's existance": [
    'GHBD-9L6:suffix',
  ],
  "Father's existance": [
    'GHBD-7M4:suffix',
  ],
  // Doesn't make sense for them to be alive
  // Everyone in Lola Estebana's generation is probably dead
  'PROBABLY NOT LIVING ANYMORE': [
    'GHB8-RCH:living',
    'G2HQ-YQS:living',
    'G2H7-Q75:living',
    'GNNH-JLM:living',
    'GJJX-1SG:living',
    'GHB8-M8D:living',
    'GHB8-M86:living',
    'GHB8-SQN:living',
    'GHB8-5K8:living',
    'GHB8-LCC:living',
    'GHB8-H7K:living',
    'LLQS-641:living',
    'LLQS-6YC:living',
    'L281-614:living',
    'GC7T-H59:living',
    'GC7T-1PK:living',
    'LLQS-6F1:living',
    'G7C3-B6P:living',
    'G7C3-J9S:living',
    'TEMP-001:living',
    'GKBR-M9Y:living',
    'GKBR-7P7:living',
    'GKBT-9GD:living',
    'K2GJ-YY3:living',
  ],
  // Arbyn Argabioso birth certificate
  'https://drive.google.com/file/d/1B1umw_xm5i-AmNp9YzshX2DebSAhj3cz/view?usp=sharing': [
    'GQX8-CQP:firstName',
    'GQX8-CQP:middleName',
    'GQX8-CQP:gender',
    'GQX8-CQP:birthDate',
    'GQX8-CQP:birthPlace',

    'GQX8-CQP:GQJK-G8W:parentChild',
    'GQJK-G8W:firstName',
    'GQJK-G8W:middleName',
    'GQJK-G8W:lastName',
    'GQJK-G8W:gender',

    'GQX8-CQP:GQJK-L51:parentChild',
    'GQJK-L51:firstName',
    'GQJK-L51:middleName',
    'GQJK-L51:lastName',
    'GQJK-L51:gender',

    'GQJK-L51:GQJK-G8W:partner',
  ],
  // My Engagement: Proposal to Mitchie (Facebook Post)
  'https://www.facebook.com/arbyn.argabioso/posts/pfbid02U3X7BU11Lb41vrbLQKrAyGe8oCEvd8SSqbY8rcCZ2MEQzcb3BUQJWL8UPhF1ZttYl': [
    'GQX8-CQP:GHB5-TWN:partner',
  ],
  // My Engagement: Proposal to Mitchie (Video)
  'https://www.youtube.com/watch?v=LNkv-M1TMtg': [
    'GQX8-CQP:GHB5-TWN:partner',
  ],
  // Mitch's birth certificate
  'https://drive.google.com/file/d/19s_gdN98AQ1sZ5lhqSf8GrpJJIpFhsdf/view?usp=sharing': [
    'GHB5-TWN:firstName',
    'GHB5-TWN:middleName',
    'GHB5-TWN:lastName',
    'GHB5-TWN:gender',
    'GHB5-TWN:birthDate',
    'GHB5-TWN:birthPlace',

    'GHB5-TWN:GHB5-XTZ:parentChild',
    'GHB5-XTZ:firstName',
    'GHB5-XTZ:middleName',
    'GHB5-XTZ:lastName',
    'GHB5-XTZ:gender',

    'GHB5-TWN:GHBR-FK3:parentChild',
    'GHBR-FK3:firstName',
    'GHBR-FK3:middleName',
    'GHBR-FK3:lastName',
    'GHBR-FK3:gender',

    'GHB5-XTZ:GHBR-FK3:partner',
  ],
  // Tatay Roland's birth certificate
  'https://drive.google.com/file/d/1degLEAa8cBBxJrRsWwz0t6wHh9vs29cH/view?usp=sharing': [
    'GQJK-L51:birthDate',
    'GQJK-L51:birthPlace',
    'GQJK-L51:firstName',
    'GQJK-L51:gender',
    'GQJK-L51:lastName',
    'GQJK-L51:middleName',

    'GQJK-L51:GQJK-LCT:parentChild',
    'GQJK-LCT:birthPlace',
    'GQJK-LCT:firstName',
    'GQJK-LCT:middleName',
    'GQJK-LCT:lastName',
    'GQJK-LCT:gender',

    'GQJK-L51:GHBZ-YVX:parentChild',
    'GHBZ-YVX:birthPlace',
    'GHBZ-YVX:firstName',
    'GHBZ-YVX:middleName',
    'GHBZ-YVX:lastName',
    'GHBZ-YVX:gender',

    'GQJK-LCT:GHBZ-YVX:partner',
  ],
  // Inquirer.net's article about Tatay Roland's NBI work
  'https://drive.google.com/file/d/1Zw8fzrh9ELRvIx1W7ncqT010edcT6hpK/view?usp=sharing': [
    'GQJK-L51:firstName',
    'GQJK-L51:lastName',
    'GQJK-L51:marker',
  ],
  // Nanay's birth certificate
  'https://drive.google.com/file/d/1Db5lGDp-mhJH7LAXnuijFXBc1c1vA07j/view?usp=sharing': [
    'GQJK-G8W:firstName',
    'GQJK-G8W:middleName',
    'GQJK-G8W:lastName',
    'GQJK-G8W:gender',
    'GQJK-G8W:birthDate',
    'GQJK-G8W:birthPlace',

    'GQJK-G8W:GHBD-7M4:parentChild',
    'GHBD-7M4:firstName',
    'GHBD-7M4:middleName',
    'GHBD-7M4:lastName',

    'GQJK-G8W:GHB8-J1B:parentChild',
    'GHB8-J1B:firstName',
    'GHB8-J1B:middleName',
    'GHB8-J1B:lastName',

    'GHBD-7M4:GHB8-J1B:partner',
  ],
  // Nanay's death certificate
  'https://drive.google.com/file/d/1JArFl6_m-kuvyPf-LqDLU3_SapZzCvkt/view?usp=sharing': [
    'GQJK-G8W:firstName',
    'GQJK-G8W:middleName',
    'GQJK-G8W:lastName',
    'GQJK-G8W:gender',
    'GQJK-G8W:birthDate',
    'GQJK-G8W:deathDate',
    'GQJK-G8W:deathPlace',
    'GQJK-G8W:living',
  ],
  // Family Search: Lolo Ligorio Death Record
  // 'https://www.familysearch.org/ark:/61903/1:1:FV6D-SZH': [
  'https://drive.google.com/file/d/1AL6hsO1Snvv-_aOovfP88-w0oxPjQs4i/view?usp=sharing': [
    'GHB8-SQN:firstName',
    'GHB8-SQN:lastName',
    'GHB8-SQN:gender',
    'GHB8-SQN:deathDate',
    'GHB8-SQN:deathPlace',
    'GHB8-SQN:living',

    'GHB8-SQN:GHB8-5K8:partner',
    'GHB8-5K8:firstName',
    'GHB8-5K8:lastName',
    'GHB8-5K8:gender',
  ],
  // Family Search: José Pedro Maramba Reyes christening record
  // includes lolo Miguel Maramba's and parents' details
  // 'https://www.familysearch.org/ark:/61903/1:1:66HQ-VJGQ': [
  'https://drive.google.com/file/d/1EZnFrq2uHZVgfDSItdUrxBqy7Wzkto7o/view?usp=sharing': [
    'LLQS-641:LLQS-6F1:partner',

    'LLQS-641:firstName',
    'LLQS-641:lastName',
    'LLQS-641:gender',

    'LLQS-6F1:firstName',
    'LLQS-6F1:lastName',
    'LLQS-6F1:gender',

    'L281-614:LLQS-641:parentChild',
    'L281-614:firstName',
    'L281-614:lastName',
    'L281-614:gender',

    'LLQS-6F1:G7C3-B6P:parentChild',
    'G7C3-B6P:firstName',
    'G7C3-B6P:gender',

    'LLQS-6F1:G7C3-J9S:parentChild',
    'G7C3-J9S:firstName',
    'G7C3-J9S:lastName',
    'G7C3-J9S:gender',

    'G7C3-B6P:G7C3-J9S:partner',
  ],
  // Geni Record for Lolo Miguel Maramba
  'https://www.geni.com/people/Miguel-Maramba/4012194445110022663': [
    'LLQS-641:firstName',
    'LLQS-641:middleName',
    'LLQS-641:lastName',
    'LLQS-641:gender',

    'GHB8-GB6:LLQS-641:parentChild',
    'GHB8-GB6:firstName',
    'GHB8-GB6:middleName',
    'GHB8-GB6:lastName',

    'LLQS-641:L281-614:parentChild',
    'L281-614:firstName',
    'L281-614:middleName',
    'L281-614:lastName',

    'LLQS-641:LLQS-6YC:parentChild',
    'LLQS-6YC:firstName',
    'LLQS-6YC:middleName',
    'LLQS-6YC:lastName',

    'LLQS-641:LLQS-6F1:partner',
    'LLQS-6F1:firstName',
    'LLQS-6F1:middleName',
    'LLQS-6F1:lastName',
  ],
  // Official Gazette ni Lolo Miguel
  'https://drive.google.com/file/d/1Ik8lFHm_F4-FaKOs4qL4CNiq-Il2WfLR/view?usp=drive_link': [
    'LLQS-641:firstName',
    'LLQS-641:lastName',
    'LLQS-641:marker',
  ],
  // Another Official Gazette entry for Lolo Miguel
  'https://drive.google.com/file/d/1CNF4lEbL4vfjbhMnTOEk02KFDhaO-Xwa/view?usp=drive_link': [
    'LLQS-641:firstName',
    'LLQS-641:lastName',
    'LLQS-641:prefix',
  ],
  // FamilySearch: Lolo Felomino death record
  // 'https://www.familysearch.org/ark:/61903/1:1:HYTD-R5ZM': [
  'https://drive.google.com/file/d/1Iu-cO6zNvD--hQoozbIXFQVPA3CXeAAm/view?usp=sharing': [
    'GH12-DRN:firstName',
    'GH12-DRN:lastName',
    'GH12-DRN:deathPlace',
    'GH12-DRN:deathDate',
  ],
  // Manuel Ajesta and Ursula badoles in son's catholic record
  'https://www.familysearch.org/ark:/61903/1:1:6JG6-3YRH': [
    'GH12-XX4:firstName',
    'GH12-XX4:gender',

    'GH12-HQN:firstName',
    'GH12-HQN:lastName',
    'GH12-HQN:gender',

    'GKBR-M9Y:firstName',
    'GKBR-M9Y:lastName',

    'GKBR-7P7:firstName',
    'GKBR-7P7:lastName',
    'GKBR-7P7:gender',

    'GKBT-9GD:firstName',
    'GKBT-9GD:lastName',

    'K2GJ-YY3:firstName',
    'K2GJ-YY3:lastName',
    'K2GJ-YY3:gender',

    'GH12-XX4:GH12-HQN:partner',
    'GH12-HQN:GKBT-9GD:parentChild',
    'GH12-XX4:GKBR-M9Y:parentChild',
  ],
  // Lola Estebana Death Certificate
  'https://drive.google.com/file/d/1yf_M5CJgnXsHGFvFmF5Uzfp4YrsAnfUY/view?usp=sharing': [
    'GHB8-RCH:firstName',
    'GHB8-RCH:lastName',
    'GHB8-RCH:gender',

    'GHB8-RCH:birthPlace',
    'GHB8-RCH:deathDate',
    'GHB8-RCH:deathPlace',
    'GHB8-RCH:living',
  ],
  // Lola Lydia Birth Certificate
  'https://drive.google.com/file/d/1Yy9S1Y4NOilHHulCeejkeeY1BUbzgRyn/view?usp=sharing': [
    'GHBZ-YVX:birthDate',
    'GHBZ-YVX:birthPlace',
    'GHBZ-YVX:firstName',
    'GHBZ-YVX:middleName',
    'GHBZ-YVX:lastName',
    'GHBZ-YVX:gender',
    'GHBZ-YVX:living',

    'GHBZ-YVX:GHB8-7T6:parentChild',
    'GHB8-7T6:firstName',
    'GHB8-7T6:middleName',
    'GHB8-7T6:lastName',
    'GHB8-7T6:marker',

    'GHBZ-YVX:GHB8-GZL:parentChild',
    'GHB8-GZL:firstName',
    'GHB8-GZL:middleName',
    'GHB8-GZL:lastName',
    'GHB8-GZL:marker',

    'GHB8-7T6:GHB8-GZL:partner',
  ],
  // Lola Lydia marriage certificate with Lolo Marcial
  'https://drive.google.com/file/d/1C2TFs8kVvf6lWq-ANjEEG165f7bWUZCs/view?usp=sharing': [
    'GHBZ-YVX:firstName',
    'GHBZ-YVX:lastName',
    'GHBZ-YVX:gender',

    'GQJK-LCT:firstName',
    'GQJK-LCT:lastName',
    'GQJK-LCT:gender',

    'GHBZ-TM4:GQJK-LCT:parentChild',
    'GHBZ-TM4:firstName',
    'GHBZ-TM4:lastName',
    'GHBZ-TM4:gender',

    'GHBZ-P5Q:GQJK-LCT:parentChild',
    'GHBZ-P5Q:firstName',
    'GHBZ-P5Q:lastName',
    'GHBZ-P5Q:gender',

    'GHB8-7T6:GHBZ-YVX:parentChild',
    'GHB8-7T6:firstName',
    'GHB8-7T6:lastName',
    'GHB8-7T6:gender',

    'GHB8-GZL:GHBZ-YVX:parentChild',
    'GHB8-GZL:firstName',
    'GHB8-GZL:lastName',
    'GHB8-GZL:gender',

    'GHBZ-P5Q:GHBZ-TM4:partner',
    'GHB8-7T6:GHB8-GZL:partner',
    'GHBZ-YVX:GQJK-LCT:partner',
  ],
  // FamilySearch: Lola Marcial marriage record
  // 'https://www.familysearch.org/ark:/61903/1:1:HBBK-QDMM': [
  'https://drive.google.com/file/d/1VQzDD8JzFMEdsN8xm1EaWsYsQqgUYuBz/view?usp=sharing': [
    'GHBZ-TM4:firstName',
    'GHBZ-TM4:lastName',
    'GHBZ-TM4:gender',

    'GHBZ-P5Q:firstName',
    'GHBZ-P5Q:lastName',
    'GHBZ-P5Q:gender',

    'GHB8-7T6:firstName',
    'GHB8-7T6:lastName',
    'GHB8-7T6:gender',

    'GHB8-GZL:firstName',
    'GHB8-GZL:lastname',
    'GHB8-GZL:gender',

    'GHBZ-YVX:firstName',
    'GHBZ-YVX:lastName',
    'GHBZ-YVX:gender',

    'GQJK-LCT:firstName',
    'GQJK-LCT:lastName',
    'GQJK-LCT:gender',

    'GHB8-7T6:GHB8-GZL:partner',
    'GHBZ-TM4:GHBZ-P5Q:partner',
    'GHBZ-YVX:GQJK-LCT:partner',

    'GHBZ-YVX:GHB8-7T6:parentChild',
    'GHBZ-YVX:GHB8-GZL:parentChild',
    'GQJK-LCT:GHBZ-P5Q:parentChild',
    'GQJK-LCT:GHBZ-TM4:parentChild',
  ],
  // Lolo Marcial's grave headstone photo
  'https://drive.google.com/file/d/1x1M6Z1asZU99nMTdtKYdfDxY_w_s2Gnc/view?usp=share_link': [
    'GQJK-LCT:birthDate',
    'GQJK-LCT:deathDate',
    'GQJK-LCT:deathPlace', // I visited Lolo Marcial in his final days in Saint Lukes
    'GQJK-LCT:firstName',
    'GQJK-LCT:middleName',
    'GQJK-LCT:lastName',
    'GQJK-LCT:living',
  ],
  // Lolo Sotero's grave headstone photo, together with
  // Lola Cresing and Lola Catalina
  'https://drive.google.com/file/d/1AeoNewX7fEeAaihfBI3Tz6kNA9ia0m-D/view?usp=share_link': [
    'GHB8-GB6:suffix',
    'GHB8-GB6:birthDate',
    'GHB8-GB6:deathDate',
    'GHB8-GB6:deathPlace', // Photo was taken by Arbyn Argabioso (Me)
    'GHB8-GB6:living',
    'GHB8-GB6:firstName',
    'GHB8-GB6:middleName',
    'GHB8-GB6:lastName',

    'GHB8-GB6:GHBD-9LY:partner',

    'GHBD-9LY:firstName',
    'GHBD-9LY:lastName',
    'GHBD-9LY:birthDate',
    'GHBD-9LY:deathDate',
    'GHBD-9LY:living',
    'GHBD-9LY:deathPlace', // Photo was taken by Arbyn Argabioso (Me)

    'GHB8-J1B:firstName',
    'GHB8-J1B:deathPlace', // Photo was taken by Arbyn Argabioso (Me)
    'GHB8-J1B:living',
  ],
  // Lolo Manuel and Lola Catalina's marriage certificate
  'https://drive.google.com/file/d/1_3rvIfv82-KWjBsaZawQV4lMFUYSB_NK/view?usp=share_link': [
    'GHB8-J1B:firstName',
    'GHB8-J1B:lastName',
    'GHB8-J1B:gender',

    'GHBD-7M4:firstName',
    'GHBD-7M4:lastName',
    'GHBD-7M4:gender',

    'GHBD-7M4:GHB8-DXY:parentChild',
    'GHBD-7M4:GHBD-9L6:parentChild',
    'GHB8-J1B:GHBD-7M4:partner',
    'GHB8-DXY:GHBD-9L6:partner',
    'GHB8-GB6:GHBD-9LY:partner',

    'GHB8-J1B:GHB8-GB6:parentChild',
    'GHB8-J1B:GHBD-9LY:parentChild',
    'GHB8-DXY:gender',
    'GHBD-9L6:gender',
    'GHB8-GB6:gender',
    'GHBD-9LY:gender',
  ],
  // Lolo Manuel Jr. California deaths and burials record
  'https://www.familysearch.org/ark:/61903/1:1:HGZ8-33ZM': [
    'GHBD-7M4:living',
    'GHBD-7M4:birthDate',
    'GHBD-7M4:deathDate',
    'GHBD-7M4:birthPlace',
    'GHBD-7M4:deathPlace',
    'GHBD-7M4:firstName',
    'GHBD-7M4:lastName',
    'GHBD-7M4:suffix',
    'GHBD-7M4:gender',

    'GHBD-7M4:GHB8-DXY:parentChild',
    'GHB8-DXY:firstName',
    'GHB8-DXY:gender',

    'GHBD-7M4:GHBD-9L6:parentChild',
    'GHBD-9L6:firstName',
    'GHBD-9L6:lastName',
    'GHBD-9L6:gender',
  ],
  // Death Certificate ni Lolo Manuel Sr.
  'https://drive.google.com/file/d/1JuyRHuSaar2p3RM0nUjWX-KPMAGjk2FK/view?usp=sharing': [
    'GHBD-9L6:firstName',
    'GHBD-9L6:middleName',
    'GHBD-9L6:lastName',
    'GHBD-9L6:gender',

    'GHBD-9L6:birthDate',
    'GHBD-9L6:deathDate',
    'GHBD-9L6:deathPlace',
    'GHBD-9L6:living',
    'GHBD-9L6:marker',
    'GHBD-9L6:marker2',

    'GHB8-DXY:firstName',
    'GHB8-DXY:lastName',
    'GHB8-DXY:gender',

    'GHB8-SQN:lastName',
    'GHB8-SQN:gender',
    'GHB8-5K8:lastName',
    'GHB8-5K8:gender',
  ],
  // Birth certificate ni Lolo Ben
  'https://drive.google.com/file/d/1u-7tnWjKdZ5-GrdLKuKi-NOAVvty25Qo/view?usp=sharing': [
    'GHBD-9L6:birthPlace',
    'GHBD-9L6:firstName',
    'GHBD-9L6:lastName',

    'GHB8-DXY:birthPlace',
    'GHB8-DXY:firstName',
    'GHB8-DXY:lastName',

    'GHBD-9L6:GHB8-DXY:partner',
  ],
  // Social Security index ni Lola Nati
  'https://www.myheritage.com/research/record-10002-81189365-/natividad-san-agustin-acosta-in-us-social-security-death-index-ssdi': [
    'GHB8-DXY:firstName',
    'GHB8-DXY:lastName',
    'GHB8-DXY:birthDate',
    'GHB8-DXY:deathDate',
    'GHB8-DXY:living',
  ],
  // Marriage certificate ni Lolo Manuel Sr. and Lola Nati
  'https://drive.google.com/file/d/1L4zy5f_l9gYFBQQ68WdVFLDunwFoKgru/view?usp=sharing': [
    'GHB8-SQN:firstName',
    'GHB8-SQN:lastName',
    'GHB8-SQN:gender',

    'GHB8-5K8:firstName',
    'GHB8-5K8:lastName',
    'GHB8-5K8:gender',

    'GHB8-SQN:GHB8-5K8:partner',

    'GHB8-LCC:firstName',
    'GHB8-LCC:lastName',
    'GHB8-LCC:gender',

    'GHB8-H7K:firstName',
    'GHB8-H7K:gender',

    'GHB8-LCC:GHB8-H7K:partner',

    'GHBD-9L6:birthPlace',
    'GHBD-9L6:firstName',
    'GHBD-9L6:lastName',
    'GHB8-DXY:birthPlace',
    'GHB8-DXY:firstName',
    'GHB8-DXY:lastName',
    'GHBD-9L6:GHB8-DXY:partner',
    'GHBD-9L6:GHB8-SQN:parentChild',
    'GHBD-9L6:GHB8-5K8:parentChild',
    'GHB8-DXY:GHB8-LCC:parentChild',
    'GHB8-DXY:GHB8-H7K:parentChild',
  ],
  // FamilySearch: Death record ni Lolo Bio
  // 'https://www.familysearch.org/ark:/61903/1:1:HR2D-1GN2': [
  'https://drive.google.com/file/d/1KlRi9VusQgxel2U6EK-pOcXxUd_Wbgll/view?usp=sharing': [
    'GHBZ-TM4:firstName',
    'GHBZ-TM4:lastName',
    'GHBZ-TM4:deathDate',
    'GHBZ-TM4:deathPlace',
    'GHBZ-TM4:living',
    'GHBZ-TM4:gender',
  ],
  // Death certificate ni Lolo Bio
  'https://drive.google.com/file/d/1SQy34nGR1Z5-AqNSZDInfkewArzP_xqp/view?usp=share_link': [
    'GHBZ-TM4:firstName',
    'GHBZ-TM4:middleName',
    'GHBZ-TM4:lastName',
    'GHBZ-TM4:deathDate',
    'GHBZ-TM4:deathPlace',
    'GHBZ-TM4:living',
    'GHBZ-TM4:marker',
    'GHBZ-TM4:gender',

    'GHBZ-TM4:GHB8-RCH:parentChild',
    'GHB8-RCH:firstName',
    'GHB8-RCH:lastName',
  ],
  // Death certificate ni Lolo Felomino
  'https://drive.google.com/file/d/1BK3uw-U_2ONst68_V7wUXFQWzzlu0pFc/view?usp=share_link': [
    'GH12-DRN:firstName',
    'GH12-DRN:middleName',
    'GH12-DRN:lastName',
    'GH12-DRN:deathDate',
    'GH12-DRN:deathPlace',
    'GH12-DRN:living',
    'GH12-DRN:gender',
    'GH12-DRN:marker',

    'GH12-DRN:GH12-3GN:partner',
    'GH12-3GN:firstName',
    'GH12-3GN:lastName',

    'GH12-SVQ:GH12-DRN:parentChild',
    'GH12-SVQ:firstName',
    'GH12-SVQ:lastName',
  ],
  // Tito Darne's birth certificate
  'https://drive.google.com/file/d/1jYZqUHatNlvgDuyFw7jxSwgZsE6jy_9V/view?usp=sharing': [
    'GHB5-XTZ:middleName',
    'GHB5-XTZ:lastName',
    'GHB5-XTZ:gender',
    'GHB5-XTZ:birthDate',
    'GHB5-XTZ:birthPlace',

    'GHB5-XTZ:GH12-9F6:parentChild',
    'GH12-9F6:firstName',
    'GH12-9F6:lastName',
    'GH12-9F6:gender',

    'GHB5-XTZ:GH12-SVQ:parentChild',
    'GH12-SVQ:firstName',
    'GH12-SVQ:lastName',
    'GH12-SVQ:gender',

    'GH12-9F6:GH12-SVQ:partner',
  ],
  // Tita Mylen's birth certificate
  'https://drive.google.com/file/d/1J6wUo6AwrS5aO9LJWbh8CUReaRTkUEFF/view?usp=sharing': [
    'GHBR-FK3:middleName',
    'GHBR-FK3:lastName',
    'GHBR-FK3:gender',
    'GHBR-FK3:birthDate',
    'GHBR-FK3:birthPlace',

    'GHBR-FK3:GH12-Z3C:parentChild',
    'GH12-Z3C:firstName',
    'GH12-Z3C:lastName',
    'GH12-Z3C:gender',

    'GHBR-FK3:GH12-W17:parentChild',
    'GH12-W17:firstName',
    'GH12-W17:middleName',
    'GH12-W17:lastName',
    'GH12-W17:gender',

    'GH12-Z3C:GH12-W17:partner',
  ],
  // Tita Mylen's PSA Birth Certificate
  'https://drive.google.com/file/d/18MFv7G6xKBJj9M4ewH8a3GgcpFW4VSht/view?usp=sharing': [
    'GHBR-FK3:middleName',
    'GHBR-FK3:lastName',
    'GHBR-FK3:gender',
    'GHBR-FK3:birthDate',
    'GHBR-FK3:birthPlace',

    'GHBR-FK3:GH12-Z3C:parentChild',
    'GH12-Z3C:firstName',
    'GH12-Z3C:middleName',
    'GH12-Z3C:lastName',
    'GH12-Z3C:gender',

    'GHBR-FK3:GH12-W17:parentChild',
    'GH12-W17:firstName',
    'GH12-W17:middleName',
    'GH12-W17:lastName',
    'GH12-W17:gender',

    'GH12-Z3C:GH12-W17:partner',
  ],
  // FamilySearch: record of Corazon Maramba including her parents
  // nanay ni Tita Cherry
  // 'https://www.familysearch.org/ark:/61903/1:1:HBNK-LY2M': [
  'https://drive.google.com/file/d/1n_6mEB9oGikZeRXw71-_buL1cIoT8X9p/view?usp=sharing': [
    'GHB8-GB6:firstName',
    'GHB8-GB6:middleName',
    'GHB8-GB6:lastName',
    'GHB8-GB6:gender',

    'GHBD-9LY:firstName',
    'GHBD-9LY:lastName',
    'GHBD-9LY:gender',

    'GHB8-GB6:GHBD-9LY:partner',
  ],
  // News article regarding Lolo Sotero being the chief in the police force
  // caputuring some trouble makers near a train station
  'https://drive.google.com/file/d/15o0fdYYMYTzXQ3ikiMCOqy-YlfAND76C/view?usp=sharing': [
    'GHB8-GB6:firstName',
    'GHB8-GB6:lastName',
    'GHB8-GB6:marker',
    'GHB8-GB6:marker2',
  ],
  // Geni: Guillermo Maramba
  'https://www.geni.com/people/Guillermo-Maramba/6000000010495044375': [
    'LLQS-6YC:firstName',
    'LLQS-6YC:lastName',
    'LLQS-6YC:gender',

    'LLQS-6YC:LLQS-641:parentChild',
    'LLQS-641:firstName',
    'LLQS-641:lastName',

    'LLQS-6YC:L281-614:partner',
    'L281-614:firstName',
    'L281-614:lastName',
  ],
  // Geni: Maria Garcia Bautista
  'https://www.geni.com/people/Maria-Maramba/6000000017013425750': [
    'L281-614:firstName',
    'L281-614:middleName',
    'L281-614:lastName',
    'L281-614:gender',
    'L281-614:LLQS-641:parentChild',
    'LLQS-6YC:L281-614:partner',

    'GC7T-H59:L281-614:parentChild',
    'GC7T-1PK:L281-614:parentChild',
  ],
  // Geni: Don Agustin Bautista
  'https://www.geni.com/people/Agustin-Bautista/6000000017013722083': [
    'GC7T-H59:firstName',
    'GC7T-H59:lastName',
    'GC7T-H59:gender',
  ],
  // Geni: Felipa Garcia
  'https://www.geni.com/people/Felipa-Bautista/6000000010494358163': [
    'GC7T-1PK:firstName',
    'GC7T-1PK:lastName',
    'GC7T-1PK:gender',
  ],
  // Lolo Sotero's death certificate
  'https://drive.google.com/file/d/1Pn6Xvn7ucwnzTgNTcFBsQq9hzAnARp51/view?usp=sharing': [
    'GHB8-GB6:birthDate',
    'GHB8-GB6:birthPlace',
    'GHB8-GB6:deathDate',
    'GHB8-GB6:deathPlace',
    'GHB8-GB6:firstName',
    'GHB8-GB6:gender',
    'GHB8-GB6:lastName',
    'GHB8-GB6:living',
  ],
  // Lolo Nestor death certificate
  'https://drive.google.com/file/d/1peIClAbyWzZV_kWcxPKAVBPDnVqFXG2Q/view?usp=drive_link': [
    'GH12-SVQ:firstName',
    'GH12-SVQ:middleName',
    'GH12-SVQ:lastName',
    'GH12-SVQ:gender',
    'GH12-SVQ:birthDate',
    'GH12-SVQ:deathDate',
    'GH12-SVQ:deathPlace',
    'GH12-SVQ:living',
    'GH12-SVQ:marker',
  ],
  // U.S. Social Security Death Index
  'U.S. Social Security Death Index': [
    'GHB8-DXY:deathDate',
    'GHB8-DXY:deathPlace',
  ],
  // Lola Nati's grave headstone
  'https://drive.google.com/file/d/10Z0kurjxNy0s7M0um4w5SxFMAFWA8Ivm/view?usp=drive_link': [
    'GHB8-DXY:living',
    'GHB8-DXY:birthDate',
    'GHB8-DXY:deathDate',
    'GHB8-DXY:firstName',
    'GHB8-DXY:GHBD-9L6:partner',
  ],
  // FamilySearch: Simplicio Lopecillo and Gregoria Villarubin
  'https://www.familysearch.org/ark:/61903/1:1:66XW-VQRT': [
    'G2HQ-YQS:firstName',
    'G2HQ-YQS:lastName',
    'G2HQ-YQS:gender',
    'G2H7-Q75:firstName',
    'G2H7-Q75:lastName',
    'G2H7-Q75:gender',
    'G2HQ-YQS:GHB8-RCH:parentChild',
    'G2H7-Q75:GHB8-RCH:parentChild',
    'G2HQ-YQS:G2H7-Q75:partner',
  ],
  // FamilySearch: Another record regarding Lolo Simplicio
  'https://www.familysearch.org/ark:/61903/1:1:66X6-LG3J': [
    'G2HQ-YQS:firstName',
    'G2HQ-YQS:lastName',
    'G2HQ-YQS:gender',
    'G2H7-Q75:firstName',
    'G2H7-Q75:lastName',
    'G2H7-Q75:gender',
    'G2HQ-YQS:GHB8-RCH:parentChild',
    'G2H7-Q75:GHB8-RCH:parentChild',
    'G2HQ-YQS:G2H7-Q75:partner',
  ],
  // FamilySearch: Record of Lola Trinidad, another daughter of Lolo Bio
  'https://www.familysearch.org/ark:/61903/1:1:HBBS-S7W2': [
    'GHBZ-TM4:firstName',
    'GHBZ-TM4:lastName',
    'GHBZ-TM4:gender',
    'GHBZ-P5Q:firstName',
    'GHBZ-P5Q:lastName',
    'GHBZ-P5Q:gender',
    'GHBZ-TM4:GHBZ-P5Q:partner',
  ],
  // Records regarding Adela Sison and Lolo Estanislao
  // 'https://www.familysearch.org/ark:/61903/1:1:FN4G-JSW': [
  'https://drive.google.com/file/d/1g_6PxiUEuhW_jvUU3p8TySDi9u-7hlwG/view?usp=sharing': [
    'GNNH-JLM:firstName',
    'GNNH-JLM:lastName',
    'GNNH-JLM:gender',
    'GJJX-1SG:firstName',
    'GJJX-1SG:lastName',
    'GJJX-1SG:gender',
    'GNNH-JLM:GJJX-1SG:partner',
  ],
  // Record regarding Lolo Victor and Lola Genoveba
  'https://www.familysearch.org/ark:/61903/1:1:HBP6-8VZM': [
    'GHB8-M8D:firstName',
    'GHB8-M8D:lastName',
    'GHB8-M8D:gender',
    'GHB8-M86:firstName',
    'GHB8-M86:lastName',
    'GHB8-M86:gender',
    'GHB8-M8D:GHB8-M86:partner',
  ],
  // Old parish article regarding Don Agustin Bautista where he
  // donated a bell for a church in Santa Barbara, Pangasinan and
  // it was mentioned that he was an Alcalde as well
  'http://www.oocities.org/hfamilyparishpang/history.html': [
    'GC7T-H59:firstName',
    'GC7T-H59:lastName',
    'GC7T-H59:gender',
    'GC7T-H59:prefix',
    'GC7T-H59:marker',
  ],
  // Guillermo Maramba from Daniel Maramba's biology
  'https://drive.google.com/file/d/1dDJs3rrAsbMSo_qp6my6J-wxE676FMEa/view?usp=drive_link': [
    'LLQS-6YC:firstName',
    'LLQS-6YC:lastName',
    'LLQS-6YC:gender',
    'LLQS-6YC:marker',
    'LLQS-6YC:marker2',

    'L281-614:firstName',
    'L281-614:lastName',
    'L281-614:gender',

    'GC7T-H59:firstName',
    'GC7T-H59:lastName',
    'GC7T-H59:L281-614:parentChild',
    'GC7T-1PK:firstName',
    'GC7T-1PK:lastName',
    'GC7T-1PK:L281-614:parentChild',
    'GC7T-H59:GC7T-1PK:partner',
  ],
};