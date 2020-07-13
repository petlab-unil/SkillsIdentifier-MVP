-- choose database
use SkillsIdentifier;

-- create table
CREATE TABLE IF NOT EXISTS SkillTranslation(
    Id INT UNSIGNED AUTO_INCREMENT,
    ElementId VARCHAR(40) NOT NULL,
    SkillUUId VARCHAR(40) NOT NULL,
    English VARCHAR(255) NOT NULL,
    French VARCHAR(255) NOT NULL,
    PRIMARY KEY (Id),
    INDEX ix_ElementId(ElementId(40)),
    INDEX ix_SkillUUId(SkillUUId(40))
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- insert data into table
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.a.1','0194023051cb666af3d2c4761d894957','Oral Comprehension','Compréhension Orale');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.a.2','19bec38cfa59f6542132b1ab155438c7','Written Comprehension','Compréhension Ecrite');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.a.3','d3dfdcdd96e1a57645c3b1728c640ee2','Oral Expression','Expression Orale');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.a.4','01f0f8544779b7139f0152f2af679983','Written Expression','Expression Ecite');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.b.1','f6ae5e7ec49a12807ba61b1d547b120b','Fluency of Ideas','Fluidité des idées');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.b.2','84eaacae3b4d0ea91b336e5ca738e407','Originality','Originalité');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.b.3','d66da8698b5a37186143205b78c73f7d','Problem Sensitivity','Sensibilité aux problèmes');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.b.4','2ed46e9b35d1407c1ac983ddc6355fc8','Deductive Reasoning','Raisonnement déductif');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.b.5','3068a4aafb2a69ca31864655bb403e90','Inductive Reasoning','Raisonnement inductif');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.b.6','e1a8c649e57ad7b1cfeef1aad5ba5c9c','Information Ordering','Organisation de l''information');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.b.7','b37fe1c8f55d2b02b55a8e7846e74e8f','Category Flexibility','Flexibilité entre les catégories');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.c.1','e72f8046dc4d704b6d1ca41dada93853','Mathematical Reasoning','Raisonnement mathématique');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.c.2','809bcc13fd9a8517d2abefa4f15ed113','Number Facility','Facilité avec les nombres');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.d.1','30322e4301eaba3abd99d2a0509ef469','Memorization','Mémorisation');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.e.1','eb5ef734480b6a225dc580eab22936b2','Speed of Closure','Rapidité pour conclure');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.e.2','f2030d619ec0dc4f5b4ba9b8cd59ae99','Flexibility of Closure','Flexibilité pour conclure');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.e.3','f1c31aa79acccfaefd2d776c37bacb4b','Perceptual Speed','Vitesse de perception');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.f.1','1ecb2830725ed9c16118af9cf479bd4b','Spatial Orientation','Orientation Spatiale');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.f.2','5cb21f7c94235e860596a2dfd90ccf82','Visualization','Visualisation');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.g.1','8d742521cd604d44c8ec58a6145e25ef','Selective Attention','Attention selective');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.1.g.2','abb8d151fd50b5eac8ddb01842e8b72a','Time Sharing','Partage du temps');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.2.a.1','06eded9b1cfc0c29ca5ba434ca10a5ae','Arm-Hand Steadiness','Fermeté du bras et de la main');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.2.a.2','5814fda4d11918be93bcaa1381f29d63','Manual Dexterity','Dextérité manuelle');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.2.a.3','bccae81653386bf74cab10df63e11b12','Finger Dexterity','Dextérité des doigts');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.2.b.1','3fbad295b55b92c44ede9bf1ba21861b','Control Precision','Contrôle de la précision');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.2.b.2','5f5513f407a612a546ba1d6fcea43c2c','Multilimb Coordination','Coordination multi-membres');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.2.b.3','cf0eff8959d558bff4a16678be8e39ef','Response Orientation','Orientation des réactions');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.2.b.4','d9be685546e218aa53e345685d4d747a','Rate Control','Contrôle des tarifs');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.2.c.1','08a3d2a8da5dbcd379e94a1706b1b7eb','Reaction Time','Temps de réaction');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.2.c.2','b48265123cbf07f0d858d4447c39a708','Wrist-Finger Speed','Vitesse poignet-doigt');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.2.c.3','1a1558105f58205b56e46b0c479430ac','Speed of Limb Movement','Vitesse de mouvement des membres');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.3.a.1','df3b75b910251942637640292890df29','Static Strength','Force statique');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.3.a.2','208b35c910da9a0e098afe2d4ed53a52','Explosive Strength','Force explosive');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.3.a.3','3fe0be635c22394a0111371f1a240ffc','Dynamic Strength','Force dynamique');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.3.a.4','17df63c2b2b7a723c9a569230db69c86','Trunk Strength','Force du tronc');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.3.b.1','ae3d27c3f9334ce5e3a9806605151cae','Stamina','Endurance');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.3.c.1','5bc277aa6944733cd163b47cd7395cff','Extent Flexibility','Degré de flexibilité');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.3.c.2','4f6f2a95fd9269eeb7b1ad9796328a52','Dynamic Flexibility','Flexibilité dynamique');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.3.c.3','d2467270e4e1ad08e87f0234c6964047','Gross Body Coordination','Coordination du corps brut');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.3.c.4','14761de245bcd6eba056fe5091f34407','Gross Body Equilibrium','Équilibre corporel brut');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.4.a.1','40d7109449763956696e4e2ef537a281','Near Vision','Vision de près');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.4.a.2','7aff9d30fec0afd69aa17a77471a0f51','Far Vision','Vision de loin');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.4.a.3','5d3842c4667b5120bda1d5e6bb68b0db','Visual Color Discrimination','Discrimination visuelle des couleurs');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.4.a.4','b18b8fef2d7455abdf73295dc7d269fe','Night Vision','Vision nocturne');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.4.a.5','2e438c6f4e1239baea1d6e6090c924de','Peripheral Vision','Vision périphérique');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.4.a.6','1e1ab7995dc9dd14cc316049ad4f9d9e','Depth Perception','Perception de la profondeur');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.4.a.7','431209d2171022ca1ca9c8866e111649','Glare Sensitivity','Sensibilité à l''éblouissement');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.4.b.1','d3927ecfc36793d703f32ed919410ac5','Hearing Sensitivity','Sensibilité auditive');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.4.b.2','90ae790c9b6657437b8d069bf6ff4b9f','Auditory Attention','Attention auditive');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.4.b.3','cea895fd0c310a50a2a83e21e40eee6e','Sound Localization','Localisation du son');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.4.b.4','32707275e50c0b0e8dcc15b91df14252','Speech Recognition','Reconnaissance de la parole');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('1.A.4.b.5','0769a92e23352ccb05f9b452f8119972','Speech Clarity','Clarté du discours');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.1.a','66e8dfe0d0591e65d8d1859ab74bfb22','Administration and Management','Administration et gestion');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.1.b','162cb662c7ef4dc9e86a2b5e88cbcdf9','Clerical','Travail de bureau');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.1.c','85acccbd8b798ae4babe2bea7b8a7c6c','Economics and Accounting','Économie et comptabilité');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.1.d','036a5e350863fc49d765d78ac3720bfb','Sales and Marketing','Ventes et marketing');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.1.e','b4595c0fed78ae278f4cb5eff45bba24','Customer and Personal Service','Service à la clientèle et service personnel');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.1.f','b34d21639b603dc75b4a6791baafb189','Personnel and Human Resources','Personnel et ressources humaines');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.10','4d70921065c00a293597936b693345aa','Transportation','Transport');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.2.a','e84312809bee7cb3fc8663def614f2a4','Production and Processing','Production et transformation');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.2.b','fa8a9d937f48f5782e03cd57d88bc044','Food Production','Production alimentaire');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.3.a','b3cb1294905e001d3d611bff1de3962c','Computers and Electronics','Ordinateurs et Électronique');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.3.b','c09c8f8c163907ac25a37c3dd591ba2e','Engineering and Technology','Ingénierie et Technologie');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.3.c','c7c0e2144032767d2c262fc7be7374e9','Design','Design');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.3.d','0f7c24a3149e28e6d85691ce9bd1374f','Building and Construction','Bâtiment et construction');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.3.e','7e3fdeae0d52916ea5c86c7e5291f5be','Mechanical','Mécanique');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.4.a','6ae28a55456b101be8261e5dee44cd3e','Mathematics','Mathématiques');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.4.b','8cfb10d3dd0ae49a87320653cbfa587e','Physics','Physique');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.4.c','dce09f281c35f49c2f58ea7580b530b7','Chemistry','Chimie');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.4.d','3c575fe4b6c023e33eb322f74890d090','Biology','Biologie');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.4.e','1231d487d9ac27b6579556329bf2a71b','Psychology','Psychologie');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.4.f','7d719e5ed1637220a761a02d4f195276','Sociology and Anthropology','Sociologie et Anthropologie');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.4.g','996dfb007ba9e5517e4d649e85d10108','Geography','Geographie');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.5.a','16b3f6e445161762cd3fdf593c1d373a','Medicine and Dentistry','Médecine et dentisterie');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.5.b','722a9902b8308829c098bcd2adac354c','Therapy and Counseling','Thérapie et conseil');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.6','ba4ebcd1fd8c42fe9792e043167fc012','Education and Training','Éducation et formation');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.7.a','500018df958f2b9f8b387cf5637a0a04','English Language','Langue anglaise');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.7.b','649d4482ca38b7ef8aa664f79b08a00e','Foreign Language','Langues étrangères');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.7.c','dcfddac48e04cbbf32e745c2c2d7d3a1','Fine Arts','Beaux-Arts');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.7.d','eeb3c70ea64d1f9a0e78ab389f7e38f9','History and Archeology','Histoire et archéologie');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.7.e','3b0585955e26ed5ae8f2480b24868b44','Philosophy and Theology','Philosophie et théologie');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.8.a','307ea985e1f67ab0c3e7967d11d271b3','Public Safety and Security','Sûreté et sécurité publiques');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.8.b','d7917431658c1f0ef3e6ab01e29e87d3','Law and Government','Droit et gouvernement');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.9.a','7a139a9ea37cb26f0636f24db60d9b77','Telecommunications','Télécommunications');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.C.9.b','c6578b03a984971e23ca21daed316dd0','Communications and Media','Communications et médias');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.A.1.a','2c77c703bd66e104c78b1392c3203362','Reading Comprehension','Compréhension écrite');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.A.1.b','a636cb69257dcec699bce4f023a05126','Active Listening','Écoute active');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.A.1.c','1cea5345d284f36245a94301b114b27c','Writing','Écriture');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.A.1.d','d1715efc5a67ac1c988152b8136e3dfa','Speaking','Parole');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.A.1.e','6ae28a55456b101be8261e5dee44cd3e','Mathematics','Mathématiques');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.A.1.f','fb5c7f9bb4b32ce2f3bff4662f1ab27b','Science','Sciences');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.A.2.a','20784bf09c9fe614603ad635e6093ede','Critical Thinking','Pensée critique');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.A.2.b','e98ada9866a495536ba6348ccec73915','Active Learning','Apprentissage actif');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.A.2.c','1f360a397369faec034b8c7132a4b825','Learning Strategies','Stratégies d''apprentissage');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.A.2.d','89948c7f4890af5ff18524b4fc3f3611','Monitoring','Suivi');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.1.a','28c4f1558e2714bc24c83e8952c1ab10','Social Perceptiveness','Perspicacité sociale');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.1.b','b5e0d83efaba5d0f289021f7efbc77ed','Coordination','Coordination');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.1.c','d75035dd61271431af6a9aabcc8b1b74','Persuasion','Persuasion');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.1.d','15269137d10ab36461acfea127f6b5e8','Negotiation','Négociation');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.1.e','138848e0f8a20e554ba09affac47a7ab','Instructing','Enseignement');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.1.f','adb4921a45ae6bfee8768ff4a4cae80e','Service Orientation','Orientation des services');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.2.i','87ba439073b69ab747d821d40b474fe6','Complex Problem Solving','Résolution de problèmes complexes');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.3.a','2962e937726316e39aa1e71a704f7bbb','Operations Analysis','Analyse des opérations');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.3.b','c7c0e2144032767d2c262fc7be7374e9','Technology Design','Conception technologique');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.3.c','035d26f14c0274510816c4f07c8ce8f3','Equipment Selection','Sélection de l''équipement');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.3.d','ea09bb364ef1bffd889e76b7a59035fc','Installation','Installation');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.3.e','7e73d06707f5fb75ec77cc5f2bd9bb92','Programming','Programmation');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.3.g','a6cf24f6d3724019c1ae335987b4ce07','Operation Monitoring','Suivi des opérations');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.3.h','92b0b1a0a1f226bff3b26bf6bb85d25b','Operation and Control','Fonctionnement et contrôle');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.3.j','4b6e11c46579a9cebec51d9038c58d10','Equipment Maintenance','Entretien du matériel');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.3.k','e09245effc62059e51f926fad603e413','Troubleshooting','Dépannage');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.3.l','b452c459a4485c0e7fe1d71d79801f51','Repairing','Réparation');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.3.m','7ab99b9e2fd453d5eb2c8e2a7ea5aaa2','Quality Control Analysis','Analyse du contrôle de la qualité');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.4.e','76ff97c187542f8ff687cb51b1c3c416','Judgment and Decision Making','Jugement et prise de décision');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.4.g','b89f9a4fa693b12b7b72b19fc8f79160','Systems Analysis','Analyse des systèmes');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.4.h','a8005198cd137bfe2ea6d007f2ef40fe','Systems Evaluation','Évaluation des systèmes');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.5.a','ed4e96dec61f1749fe26c4e6d576719a','Time Management','Gestion du temps');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.5.b','8a832ac0b416c944e2ca995a64399ed8','Management of Financial Resources','Gestion des Ressources Financières');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.5.c','959aeb423a004697059c4b2045c482cf','Management of Material Resources','Gestion des Ressources Matérielles');
INSERT INTO SkillTranslation(ElementId, SkillUUId, English, French) VALUES('2.B.5.d','738a002b1aab0be6f74c025c369afdcf','Management of Personnel Resources','Gestion des Ressources en Personnel');