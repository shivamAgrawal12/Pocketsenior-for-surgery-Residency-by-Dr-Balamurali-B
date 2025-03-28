import Appendix from '../assets/Appendix.jpeg';
import chest_tube from '../assets/ICD.png'; 
import Graham from '../assets/Graham.jpeg';
import jabuolays from '../assets/jabuolays.jpeg';
import Stoma from '../assets/Stoma.jpeg';
import Hernia from '../assets/Hernia.jpeg';
import circumcision from '../assets/circumcision.jpeg';
import sline_water from '../assets/sline_water.jpeg';
import upper_endoscopy from '../assets/upper_endoscopy.jpg';


const testimonials = [
    {
      chapterId: "1",
      chapter: "Chapter - 1",
      name: "ICD INSERTION",
      image: chest_tube,
      text: "One of the earliest Invasive procedures we face as a first-year resident in surgery is Intercostal Drainage. It is important to know every steps involved and precautions to be followed while doing one.",
      indication: ["TRAUMATIC ~ PNEUMOTHORAX, HEMOTHORAX", "TUBERCULOUS HYDROTHORAX", "CHYLOTHORAX", "MALIGNANCY"],
      instrument: ["Artery Forceps (Straight/Curved)", "Toothed Forceps", "Blade size 11/22", "ICD Drain tube size for an average adult 32Fr", "Water sealed Bag", "Elastic adhesive Bandage"],
      procedure: [
                  "Paint and draped with povidone iodine to ensure aseptic precautions",
                  "Position: Supine Recumbent, asking the patient to keep their palm of the hand over the head",
                  "Site of Insertion: it is important to have the knowledge of site of insertion of chest tube to make it uneventful. As far as the icd insertion is concerned Triangle of safety serves the purpose. The triangle is bounded by *medial: lateral border of pectoralis major muscle *laterally: anterior border of Latissimus dorsi *Superiorly: inferior to axilla. Usually this corresponds to the fifth intercostal space in the midaxillary line. Using the Angle of Louis as landmark second intercostal space can be traced, from which fifth intercostal space is identified. One has to be clear in identifying the angle of louis as often residents confuse it with the sternal notch",
                  "Preparing the water sealed bag with pouring NS of 200ml / till the line given over the bag. Tube is opened, upper end is fixed with a straight artery forceps and lower end is clamped.",
                  "A horizontal incision / incision perpendicular to the patient axis is given of size 2 to 3 cm in length to go through fascia and intercostal muscle. Little finger tip is used to confirm the plane and depth of dissection. At the level of parietal pleural a gentle guarded force is given to open it up for the tube to be inserted. (This can be felt as feeling of a giveaway through a A4 paper)",
                  "The tube whose lower end is clamped, directed towards the opening made into the thoracic cavity. At this point depending on the aetiology air/fluid/blood will pass along the tube. The lower end is now connected to the water seal bag to look for the bubble coming out seen as swinging action up and down along the inspiration and expiration of patient.",
                  "Tube is fixed with a purse string suture and tightly plastered with bandage after proper antiseptic dressing"
                ],
      precaution: [
                    "SPO2 OF THE PATIENT HAS TO BE MONITORED THROUGHOUT THE PROCEDURE AND PATIENT IS KEPT UNDER THE OXYGEN SUPPORT",
                    "LOWER END OF THE TUBE SHOULD BE ENSURED CLAMPING",
                    "WHILE INTRODUCING THE TUBE AFTER DISSECTON IT SHOULD BE ENSURED THAT TUBE DID NOT GO TO THE SUBCUTANEOUS PLANE, ALSO THE EYE OPENING OF TUBE SHOULD BE MADE SURE WITHIN THE THORACIC CAVITY",
                    "WHILE SUTURING THE POSITION OF THE TUBE SHOULD NOT GO DOWN AS USUALLY THE ASSISTANT PULLS IT DOWN",
                    "IN HEMOTHORAX, IF OUTPUT >1500 ML IS INDICATION FOR THORACOTOMY ",
                    "POST TUBE INSERTION CHEST XRAY PA VIEW HAS TO BE DONE",
                    "THE LEVEL OF WATER SEAL BAG SHOULD ALWAYS BE KEPT BELOW THE LEVEL OF CHEST"
                  ]
    },
    {
      chapterId: "2", 
      chapter: "Chapter - 2",
      name: "APPENDECTONY",
      image: Appendix,
      text: "Diagnosing a case of appendectomy is very crucial, needs to be confirmed either clinically or through investigations (WBC count, USG).",
      instrument:["Artery Forceps (CURVED/ STRAIGHT)", "Toothed Forceps", "Needle holder", "Langenberg retractors", "Blade", "Alley's forceps", "Babcock forceps", "Scissors"],
      position: "Supine"
,      procedure:[      
                  "Anaesthesia: General/Spinal",
                  "Paint and draped with povidone iodine to ensure the aseptic precautions around the surgical site",
                  "Incision: McBurney point has to be identified, the junction of lateral one third and medial two third of the right spino-umbilical line. Incision is made perpendicular to the right spino umbilical line at the McBurney point.",
                  "Immediately after the skin, two layers of fascia is encountered which are cut to look for the external oblique aponeurosis",
                  "External oblique aponeurosis is cut along the line of incision, internal oblique and transverse muscles are split",
                  "A pearly white peritoneum is then identified, lifted up, ensuring no bowel adhered, opened along the line of incision.",
                  "Caecum has to be identified by visualising the taenia and terminal ileum with the ligament of Treves(fold connecting the small intestine to the appendix)",
                  "Appendix is then delivered out with the index finger, with a hooking action or can be delivered directly using a Babcock's forceps after separating the adhered omentum",
                  "Transparent area over the mesoappendix at the level of base is visualised to enter the artery forceps, followed by which mesoappendix along with appendicular artery is ligated, and cut along the appendix",
                  "At the base, appendix is crushed and transfixed. Proximal to the ligation, appendix",
                  "Layers are closed after ensuring haemostasi"
                ],
      precaution: [
                    "Appendix needs to be identified by tracing the taeniae to confirm caecum, blindly putting the finger will not provide proper result",
                    "Mesoappendix needs to be ligated with sufficient knots as slipping away is highly possible",
                    "Appendix after cut, can be tinched with a drop of betadine",
                    "Holding the layers cut with forceps is important as closure can become difficult in a small operating site"
                  ]      
    },
    {
      chapterId: "3",
      chapter: "Chapter - 3",
      name: "CLASSICAL AND MODIFIED GRAHAM PATCH",
      image: Graham,
      text: "Ileostomy and colostomy, although having similar technique, etiologies widely differs Considering the technique its broadly comes into two categories as loop and end, but as far as the marking the site is concerned it its similar ",     
      instrument:["Artery Forceps", "Toothed Forceps", "Alley Forceps", "Zerney RETRACTORS", "DAEVERS RETRACTORS", "NEEDLE HOLDER",  "Scissors"],
      procedure:[
                  "Paint and draped with povidone iodine to ensure the aseptic precautions around the surgical site",
                  "Midline incision is given by palpating xiphisternum above and pubic symphysis below to mark the midline",
                  "Omentum are usually clumped over the perforated site, acting as the policemen, this helps in identifying the perforation easily",
                  "Once perforation is detected over the prepyloric/duodenal, plan for classical versus modified graham patch is based on the size of the perforation or surgeon's choice",
                  "The perforated edges need to be freshened if associated with flakes and inflammation, in case of gastric, tissue is taken for biopsy to rule out alignancy",
                  "In classical technique, using vicryl 2-0 throw is taken from the edges of the perforated site, without approximating over the either angle and centrally. A freshened omental pedicle is taken and placed just above the suture, now the suture throws are tightened to approx. the edge",
                  "In modified technique, the edges are approximated first, followed by placing a omental pedicle",
                  "Romo ADK drain is placed",
                  "Rectus sheath is closed",
                  "Skin closed"
                ],
      precaution: [
                    "ALWAYS EXPLORE THE BOWEL COMPLETELY IN CASE OF THE PERFORATION EVEN AFTER IDENTIFYING ONE INITIALLY",
                    "THE EDGES OF PERFORATED SITES CAN EASILY GIVE UP WHILE TAKING A THROW CARE SHOULD BE TAKEN FOR PROPER DEPTH AND TENSION",
                    "OMENTUM USED FOR PLACING OVER THE SUTURES, NEEDS TO BE FRESHENED IF ASSOCIATED WITH FLAKES",
                    "POST OPERATIVELY PATIENTS HAS TO BE STARTED WITH A H PYLORI REGIMEN "
                  ]
    },
    {
      chapterId: "4",
      chapter: "Chapter - 4",
      name: " HERNIA REPAIR",
      image: Hernia,
      text: "Direct and indirect inguinal hernia has different operative technique; to understand the surgery one has to understand the basics of origin of hernia in both the component.",
      instrument:["Artery Forceps", "Toothed Forceps", "Alley's forceps", "Langenberg retractors", "Scissors"],
      procedure:[
                  "INDIRECT INGUINAL HERNIA: LICHENTENSTEIN TENSION FREE MESH HERNIOPLASTY",          
                  "Paint and draped with povidone iodine to ensure the aseptic precautions around the surgical site",
                  "Incision: we need to palpate the pubic tubercle first; the line of incision can be made 1 cm above and parallel to the inguinal ligament extending from pubic tubercle till the mid inguinal point.",
                  "After skin, camper's fascia and scarpa's fascia needs to be cut followed by the visualising the external oblique aponeurosis which appears white with fiberous pattern",
                  "External oblique is separated with a small incision using blade, followed by extending the incision till the superficial ring",
                  "The external oblique needs to be separated from the underlying structures using a swab gently. Both leaves are hold using artery forceps",
                  "Now its time for the cord to be separated, which has to be done by identifying the pubic tubercle, a projection from the symphysis. Index finger is kept in hook like manner and introduced below the tubercle to separate the cord from below then on both sides",
                  "Cord once separated is kept aside using a sling of gauze",
                  "The sac needs to be separated from the cord, identifying the sac is the major component of surgery which needs the utmost patience as possibilities of injuring vessels are high while doing the same",
                  "Sac is mostly medial and above from the deep inguinal ring, hence one has to start looking from the same initially, the sac is noted as pearly white structure ",
                  "Once sac is identified, needs to be separated precisely followed by identifying the neck, fundus of the sac (neck can be identified using the preperitoneal fat)",
                  "Fundus of the sac is opened and hold using three artery forceps making a triangular shaped opening, content needs to be checked and reduced",
                  "Above the level of neck, the sac needs to be transfixed or purse string suture to be taken after proper reduction of the contents. Remaining part of the sac is cut constituting the herniotomy part of the surgery",
                  "For the hernioplasty, Mesh of size 15*8 cm is opted for the inguinal hernia. The mesh has to be placed below the cord, such a way that one end has to be fixed to the pubic tubercle, medially to the conjoint tendon, laterally to the inguinal ligament and below a window is created to accommodate the cord, then overlapped. ",
                  "Prolene 2-0 is used for the purpose, a minimum 6 sutures are taken to fix it",
                  "Layers are closed after ensuring the haemostasis",
                  "DARNING REPAIR FOR STRENTHENING IN DIRECT INGUINAL HERNIA",
                  "There is no need for herniotomy in direct inguinal hernia, once the hernia is reduced after performing the 7 steps explained above, strengthening needs to be started",
                  "Prolene 1 is used, initial fixation to the pubic tubercle followed by next throw is taken over the conjoint tendon above and to the inguinal ligament below",
                  "Same action is continued with no tension, aim is to just approx. the both, continued till deep ring",
                  "Now an inversion is done in the direction of throw and placed in between the previous throws",
                  "Finally, the end is fixed to the knot taken over the pubic tubercle",
                  "Layers are closed, haemostasis ensured"
                ],
      precaution: [
                    "CARE TO BE TAKEN WHILE SEPARTING CORD AS ILIOHYPOGASTRIC NERVE IS ENCOUNTERED ABOVE AND MEDIALLY, ILIOINGUINAL NERVE IS ENCOUNTERED IN THE CANAL JUST OUTSIDE THE CORD, GENITOFEMORAL NERVE THROUGH THE CORD",
                    "DURING THE EXTERNAL OBLIQUE APONEUROSIS LEAVES SEPARATION WITH SWAB, THE EXTENT OF LEAVES SHOULD BE TILL WE SEE CONJOINT TENDON ABOVE AND INGUINAL LIGAMENT BELOW",
                    "NO TIGHTENING OF THROWS WHILE DOING THE DARNING REPAIR",
                    "WHILE DOING HERNIOTOMY, SAC SHOULD BE ENSURED THAT CONTENT IS REDUCED PROPERLY BEFORE TRANSFIXATION"
                  ]
    },
    {
      chapterId: "5",
      chapter: "Chapter - 5",
      name: "STOMA",
      image: Stoma,
      text: "Ileostomy and colostomy, although having similar technique, etiologies widely differs Considering the technique its broadly comes into two categories as loop and end, but as far as the marking the site is concerned it its similar ",
      instrument:["Artery Forceps", "Toothed Forceps", "Alley's forceps", "Langenberg retractors", "Scissors", "Needle holders"],
      procedure:[
                  "Marking the site of stoma is the crucial step, depending on the aetiology, it needs to be decided either right or left side",
                  "Stoma should be placed within the extent of rectus, i.e. one third from midline, then a line drawn between spino-umblical.",
                  "Stoma should be placed 2cm below the middle of this line, and within the rectus",
                  "The opening needed for stoma is made in the marked point above by holding the skin over the mark with alleys forceps, using the blade opening of 2-3cm diameter is made by cutting along the lifted part of skin",
                  "Making a stoma depends on the aetiology, type(loop, end) that are decided by the surgeon, although not everything can be discussed a basic idea for fixation, Two-point maturation of rectus and bowel using vicryl 2-0, Three-point maturation of skin, serosa of bowel and through and through mucosa of the bowel from edge using silk 3-0"
                ]
    },
    {
      chapterId: "6",
      chapter: "Chapter - 6",
      name: "FLUIDS AND MANAGEMENT",
      image: sline_water,
      text: "It is important to know the fluid management as a surgery resident. There are various scenarios we encounter as a resident which demands swift action for resuscitation of patient",
      indication: [
                    "RL is key fluid for the acute pancreatitis",
                    "RL is contraindicated for the patient came with electric burn",
                    "RL is contraindicated for the patient came with kidney injury",
                    "NS is key fluid for the diabetic ketoacidosis patient",
                    "NS is key fluid for the Gastric outlet obstruction patient",
                    "DNS/D10 is key fluid for the patient with Jaundice",
                    "D25 is key fluid for hypoglycaemic patients"
                  ],
      instrument: [
                    "For a patient requiring maintenance fluid, is arbitrated with input and urine output charting, and 100-50-20 rule (100ml/kg for first 10kg, 50ml/kg for second 10kg, 20ml/kg for the remaining)",
                    "Post operative patient whose weight is 75kg necessitating maintenance fluid is calculated as following 10*100=1000; 10*20=200; 55*20=1100, summing up to 2300ml/day which is around 5 fluids approx.",
                    "In a case of metabolic acidosis in a sepsis patient with lactic acidosis, normal LFT, RL is advised for the patient for better outcome owing to the bicarbonate conversion.",
                    ". In an ongoing deficit as in dehydration, fluid is calculated as body weight * percentage of dehydration",
                    "In a case of bicarbonate deficit in metabolic acidosis, a formula is used to advise sodium bicarbonate is 0.5*body weight (desired bicarbonate - actual bicarbonate)"
                  ]
                  
    },
    {
      chapterId: "7",
      chapter: "Chapter - 7",
      name: "CIRCUMCISION",
      image: circumcision,
      text: "A simple procedure, necessitating a precise surgical technique.",
      indication: ["PHIMOSIS","PARAPHIMOSIS", "BALAINITIS", "BALANOPOSTHITIS", "MALIGNANCY INVOLVING THE PREPUCE OR GLANS"],
      instrument: ["STRAIGHT ARTERY FORCEPS", "SCISSORS", "PLAIN FORCEPS", "NEEDLE HOLDER"],
      position: "Supine",
      procedure:[
                  "PREPARATION OF LOCAL ANAESTHESIA FOR DORSAL PENILE NERVE BLOCK: 5ML of Xylocaine 1% + 5ML of Bupivacaine 0.5%",   
                  "It is either given as a ring block at base of the penis or dorsal penile nerve block at the level of pubic symphysis or combination of both The local anaesthesia is initially injected at the base of penis dorsally, then retrieve it slightly and inject it to the lateral sides. Before injecting aspirating, them to ensure there is no flashback indicating the needle inside an artery/vein",
                  "Paint and draped with povidone iodine to ensure the aseptic precautions around the surgical site",
                  "The skin over the penis is lifted up after dissecting with artery forceps if any stricture",
                  "Before the skin is cut, can be crushed using a artery forceps dorsally followed by the skin is cut up to the level of corona vertically from the tip, later extending it circumferentially to cut off the extra skin.",
                  "Frenula artery, that is encountered on ventral side is tied with a catgut suture ",      
                  "The skin that are left over is apposed to the edges of corona using interrupted catgut suture",
                  "Haemostasis ensured"
                ],
      precaution: [
                    "CARE SHOULD BE TAKEN WHILE PREPARING LOCAL ANESTHESIA, ADRENALINE COMBINATION IS STRICTLY CONTRADINDICATED.",
                    "FRENULAR ARTERY NEED TO BE TIED BEFORE CUTTING IT DURING CIRCUMFERENTIAL EXTENSION",
                    "HEMOSTASIS SHOULD BE ENSURED BEFORE DRESSING"
                  ]
    },
    {
      chapterId: "8",
      chapter: "Chapter - 8",
      name: "JABOULAY'S PROCEDURE",
      image: jabuolays,
      text: "This is an exciting procedure for both first year resident and interns. Indicated in patients with hydrocele often done under local anaesthesia. In bilateral hydrocele spinal anaesthesia can be considered.",
      instrument: ["BLADE 11/22", "ARTERY FORCEPS", "TOOTHED FORCEPS", "MOSQUITO FORCEPS", "SCISSORS", "SYRINGE 10ML", "NEEDLE HOLDER", "KIDNEY TRAY"],
      position: "Supine",
      procedure: [
                  "Preparation of local anaesthesia for CORD BLOCK: 5ML of Xylocaine 1% + 5ML of Bupivacaine 0.5%.",
                  "Paint and draped with povidone iodine solution of the surgical site to ensure aseptic precautions.",
                  "Site of incision: horizontal incision, perpendicular to median raphe of size 5-6cm in the most fluctuant part of scrotum after properly kept in position by the assistant",
                  "It is important to know the layers we are going to dissect, layers of scrotum from above to below is described as SKIN, DARTOS FASCIA, EXTERNAL ERMATIC FASCIA, CREMASTIC, INTERNAL SPECMATIC FASCIA, TUNICA VAGINALIS (PARIETAL & VISCERAL), TUNICAL ALBUGINEA",
                  "The final plane of dissection is between the parietal and visceral layer of Tunica vaginalis which is embryologically a peritoneum extent for descent of testes from abdomen. This is identified with its Bluish appearance",
                  "Once the parietal layer is visible, the sac is separated from all sides. Any fringes attached are precisely separated in such way that sac is delivered outside",
                  "In the most fluctuant point, away from the testes, stab incision is given with guarded precaution. The fluid is drained. Sac is opened along the incision point to evert it. Once everted, it is closed continuously with a Catgut suture (round body) leaving one finger space medially. ",
                  "Testes is placed inside the scrotum in its original anatomical position, layers are closed , skin closure done",
                  "Scrotal support has to be given"
                ],
      precaution:[ 
                  "ONCE SKIN IS CUT, LOOK FOR THE VESSELS CROSSING THE DARTOS FASCIA TO AVOID BLEEDING",
                  "DISSECTION SHOULD BE PRECISE, PRECAUTIONS TO BE TAKEN FOR DELIVERING THE SAC IN SITU OUTSIDE",
                  "HEMOSTASIS SHOULD BE ENSURED BEFORE CLOSING THE LAYERS AS THEY ARE MORE PRONE FOR HEMATOMA FORMATION IF LEFT UN ATTENDED."
                ]
    },
    {
      chapterId: "9",
      chapter: "Chapter - 9",
      name: "UPPER GI ENDOSCOPY",
      image: upper_endoscopy,
      text: "In a modern health world, moving towards the minimally accesive surgery, endoscopy prospects have grown sky high Its important for the surgery resident to operate one at basic level",
      instrument: [
                    "The scope comes with an umbilical cord connecting it to the processor and source light",
                    "Two wheels constituting a larger one for the upward and downward movement, a small one for the right and left movement",
                    "The scope comes with motion simulation whose body movement helps in right and left movement"
                  ],
      position: "LEFT LATERAL",
      procedure: [
                  "The idea is to explore till the level of D2",
                  "At the level of mouth, wheel is maintained at neutral position, and gradually advanced inside till we see the base of the tongue",
                  "At the base of tongue, an upward movement (wheel towards the body) to visualise the Epiglottis, vocal cord",
                  "Now the scope is advanced either left or right to reach pyriform fossa",
                  "At the pyriform fossa slight right movement and upward movement to enter the oesophagus",
                  "At the level of oesophagus, scope is ensured in the centre position(keeping the scope to the level parallel to body)",
                  "At the GEJ, on entering left side greater curvature, right side antrum can be seen",
                  "To visualise the fundus at this level, one has to do a complete left movement and upward movement",
                  "Now to advance to the pylorus, scope needs to be positioned in between greater curvature and antrum, for which a slight right movement of scope from the level of GEJ",
                  "Now curve towards the mucosa and give a upward movement to advance gradually to the pylorus",
                  "Once pylorus is visualised, make sure the scope is centre and enter into it",
                  "Inside the pylorus, a completely right movement with wrist + complete upward movement is given to enter duodenum",
                  "At duodenum, it is important to visualise the ampulla for any abnormality",
                  "While retrieving back, fundus can be visualised by a J manoeuvre (retroflexion), to do one, scope has to be placed at level of incisura angularis and go for a complete left + upward movement",
                  "Scope is retrieved back to look for any findings "
                ],
      precaution:[ 
                  "LOCAL ANAESTHESIA IS SPRAYED BEFORE THE PROCEDURE",
                  "NPO, 3 HOURS FOR LIQUID, 6 HOURS FOR SEMISOLID, 8 HOURS FOR HEAVY MEALS (ROLE OF GASTRIC LAVAGE IS CONTROVERSIAL, HENCE INDVIDUALISED)",
                  "SCOPE HAS TO BE HOLD ATLEAST 5 CM AWAY FROM THE MOUTH LEVEL TO NAVIGATE PROPERLY",
                  "INJ BACLOFEN, ERYTHROMYCIN, METOCLOPROMIDE HAS ITS ROLE IN ANTI MOTILITY ACTION WHILE DOING THE ENDOSCOPY"
                ]
    }
  ];
  
  export default testimonials;
  