-- choose database
use SkillsIdentifier;

-- create table
CREATE TABLE IF NOT EXISTS Element(
    ID INT UNSIGNED AUTO_INCREMENT,
    ElementID VARCHAR(20) NOT NULL,
    ElementGroup VARCHAR(20) NOT NULL,
    English VARCHAR(255) NOT NULL,
    French VARCHAR(255) NOT NULL,
    PRIMARY KEY (ID),
    INDEX ix_ElementGroup(ElementGroup(20)),
    INDEX ix_ElementID(ElementID(20)),
    INDEX ix_English(English(255)),
    INDEX ix_French(French(255))
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- insert data
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.a.1','Abilities','Oral Comprehension','Compréhension Orale');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.a.2','Abilities','Written Comprehension','Compréhension Ecrite');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.a.3','Abilities','Oral Expression','Expression Orale');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.a.4','Abilities','Written Expression','Expression Ecite');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.b.1','Abilities','Fluency of Ideas','Fluidité des idées');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.b.2','Abilities','Originality','Originalité');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.b.3','Abilities','Problem Sensitivity','Sensibilité aux problèmes');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.b.4','Abilities','Deductive Reasoning','Raisonnement déductif');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.b.5','Abilities','Inductive Reasoning','Raisonnement inductif');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.b.6','Abilities','Information Ordering','Organisation de l''information');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.b.7','Abilities','Category Flexibility','Flexibilité entre les catégories');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.c.1','Abilities','Mathematical Reasoning','Raisonnement mathématique');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.c.2','Abilities','Number Facility','Facilité avec les nombres');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.d.1','Abilities','Memorization','Mémorisation');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.e.1','Abilities','Speed of Closure','Rapidité pour conclure');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.e.2','Abilities','Flexibility of Closure','Flexibilité pour conclure');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.e.3','Abilities','Perceptual Speed','Vitesse de perception');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.f.1','Abilities','Spatial Orientation','Orientation Spatiale');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.f.2','Abilities','Visualization','Visualisation');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.g.1','Abilities','Selective Attention','Attention selective');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.1.g.2','Abilities','Time Sharing','Partage du temps');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.2.a.1','Abilities','Arm-Hand Steadiness','Fermeté du bras et de la main');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.2.a.2','Abilities','Manual Dexterity','Dextérité manuelle');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.2.a.3','Abilities','Finger Dexterity','Dextérité des doigts');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.2.b.1','Abilities','Control Precision','Contrôle de la précision');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.2.b.2','Abilities','Multilimb Coordination','Coordination multi-membres');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.2.b.3','Abilities','Response Orientation','Orientation des réactions');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.2.b.4','Abilities','Rate Control','Contrôle des tarifs');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.2.c.1','Abilities','Reaction Time','Temps de réaction');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.2.c.2','Abilities','Wrist-Finger Speed','Vitesse poignet-doigt');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.2.c.3','Abilities','Speed of Limb Movement','Vitesse de mouvement des membres');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.3.a.1','Abilities','Static Strength','Force statique');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.3.a.2','Abilities','Explosive Strength','Force explosive');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.3.a.3','Abilities','Dynamic Strength','Force dynamique');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.3.a.4','Abilities','Trunk Strength','Force du tronc');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.3.b.1','Abilities','Stamina','Endurance');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.3.c.1','Abilities','Extent Flexibility','Degré de flexibilité');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.3.c.2','Abilities','Dynamic Flexibility','Flexibilité dynamique');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.3.c.3','Abilities','Gross Body Coordination','Coordination du corps brut');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.3.c.4','Abilities','Gross Body Equilibrium','Équilibre corporel brut');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.4.a.1','Abilities','Near Vision','Vision de près');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.4.a.2','Abilities','Far Vision','Vision de loin');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.4.a.3','Abilities','Visual Color Discrimination','Discrimination visuelle des couleurs');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.4.a.4','Abilities','Night Vision','Vision nocturne');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.4.a.5','Abilities','Peripheral Vision','Vision périphérique');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.4.a.6','Abilities','Depth Perception','Perception de la profondeur');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.4.a.7','Abilities','Glare Sensitivity','Sensibilité à l''éblouissement');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.4.b.1','Abilities','Hearing Sensitivity','Sensibilité auditive');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.4.b.2','Abilities','Auditory Attention','Attention auditive');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.4.b.3','Abilities','Sound Localization','Localisation du son');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.4.b.4','Abilities','Speech Recognition','Reconnaissance de la parole');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.A.4.b.5','Abilities','Speech Clarity','Clarté du discours');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.1.a','Knowledge','Administration and Management','Administration et gestion');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.1.b','Knowledge','Clerical','Travail de bureau');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.1.c','Knowledge','Economics and Accounting','Économie et comptabilité');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.1.d','Knowledge','Sales and Marketing','Ventes et marketing');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.1.e','Knowledge','Customer and Personal Service','Service à la clientèle et service personnel');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.1.f','Knowledge','Personnel and Human Resources','Personnel et ressources humaines');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.10','Knowledge','Transportation','Transport');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.2.a','Knowledge','Production and Processing','Production et transformation');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.2.b','Knowledge','Food Production','Production alimentaire');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.3.a','Knowledge','Computers and Electronics','Ordinateurs et Électronique');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.3.b','Knowledge','Engineering and Technology','Ingénierie et Technologie');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.3.c','Knowledge','Design','Design');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.3.d','Knowledge','Building and Construction','Bâtiment et construction');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.3.e','Knowledge','Mechanical','Mécanique');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.4.a','Knowledge','Mathematics','Mathématiques');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.4.b','Knowledge','Physics','Physique');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.4.c','Knowledge','Chemistry','Chimie');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.4.d','Knowledge','Biology','Biologie');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.4.e','Knowledge','Psychology','Psychologie');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.4.f','Knowledge','Sociology and Anthropology','Sociologie et Anthropologie');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.4.g','Knowledge','Geography','Geographie');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.5.a','Knowledge','Medicine and Dentistry','Médecine et dentisterie');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.5.b','Knowledge','Therapy and Counseling','Thérapie et conseil');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.6','Knowledge','Education and Training','Éducation et formation');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.7.a','Knowledge','English Language','Langue anglaise');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.7.b','Knowledge','Foreign Language','Langues étrangères');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.7.c','Knowledge','Fine Arts','Beaux-Arts');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.7.d','Knowledge','History and Archeology','Histoire et archéologie');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.7.e','Knowledge','Philosophy and Theology','Philosophie et théologie');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.8.a','Knowledge','Public Safety and Security','Sûreté et sécurité publiques');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.8.b','Knowledge','Law and Government','Droit et gouvernement');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.9.a','Knowledge','Telecommunications','Télécommunications');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.C.9.b','Knowledge','Communications and Media','Communications et médias');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.A.1.a','Skills','Reading Comprehension','Compréhension écrite');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.A.1.b','Skills','Active Listening','Écoute active');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.A.1.c','Skills','Writing','Écriture');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.A.1.d','Skills','Speaking','Parole');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.A.1.e','Skills','Mathematics','Mathématiques');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.A.1.f','Skills','Science','Sciences');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.A.2.a','Skills','Critical Thinking','Pensée critique');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.A.2.b','Skills','Active Learning','Apprentissage actif');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.A.2.c','Skills','Learning Strategies','Stratégies d''apprentissage');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.A.2.d','Skills','Monitoring','Suivi');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.1.a','Skills','Social Perceptiveness','Perspicacité sociale');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.1.b','Skills','Coordination','Coordination');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.1.c','Skills','Persuasion','Persuasion');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.1.d','Skills','Negotiation','Négociation');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.1.e','Skills','Instructing','Enseignement');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.1.f','Skills','Service Orientation','Orientation des services');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.2.i','Skills','Complex Problem Solving','Résolution de problèmes complexes');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.3.a','Skills','Operations Analysis','Analyse des opérations');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.3.b','Skills','Technology Design','Conception technologique');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.3.c','Skills','Equipment Selection','Sélection de l''équipement');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.3.d','Skills','Installation','Installation');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.3.e','Skills','Programming','Programmation');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.3.g','Skills','Operation Monitoring','Suivi des opérations');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.3.h','Skills','Operation and Control','Fonctionnement et contrôle');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.3.j','Skills','Equipment Maintenance','Entretien du matériel');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.3.k','Skills','Troubleshooting','Dépannage');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.3.l','Skills','Repairing','Réparation');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.3.m','Skills','Quality Control Analysis','Analyse du contrôle de la qualité');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.4.e','Skills','Judgment and Decision Making','Jugement et prise de décision');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.4.g','Skills','Systems Analysis','Analyse des systèmes');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.4.h','Skills','Systems Evaluation','Évaluation des systèmes');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.5.a','Skills','Time Management','Gestion du temps');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.5.b','Skills','Management of Financial Resources','Gestion des Ressources Financières');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.5.c','Skills','Management of Material Resources','Gestion des Ressources Matérielles');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('2.B.5.d','Skills','Management of Personnel Resources','Gestion des Ressources en Personnel');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.C.1.a','Workstyles','Achievement/Effort','Capacité à terminer des tâches et à fournir des efforts en façant des sprints');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.C.1.b','Workstyles','Persistence','Persistance');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.C.1.c','Workstyles','Initiative','Initiative');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.C.2.b','Workstyles','Leadership','Leadership');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.C.3.a','Workstyles','Cooperation','Coopération');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.C.3.b','Workstyles','Concern for Others','Préoccupation pour les autres');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.C.3.c','Workstyles','Social Orientation','Orientation sociale');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.C.4.a','Workstyles','Self Control','Autocontrôle');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.C.4.b','Workstyles','Stress Tolerance','Tolérance au stress');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.C.4.c','Workstyles','Adaptability/Flexibility','Adaptabilité/Flexibilité');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.C.5.a','Workstyles','Dependability','Fiabilité');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.C.5.b','Workstyles','Attention to Detail','Attention aux détails');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.C.5.c','Workstyles','Integrity','Intégrité');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.C.6','Workstyles','Independence','Indépendance');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.C.7.a','Workstyles','Innovation','Innovation');
INSERT INTO Element(ElementID, ElementGroup, English, French) VALUES('1.C.7.b','Workstyles','Analytical Thinking','Pensée analytique');