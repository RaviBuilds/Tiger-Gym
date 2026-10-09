# GYM RESEARCH PACKAGE — Tiger Gym

Researched: October 2026 (the report states data was verified in October 2026; exact research day not supplied)
Researcher: Gemini Deep Research
Phase: PROSPECT_DEMO
Source report: `Tiger Gym Business Research.pdf`

> This file is the schema-normalized research package for the BLOGSPAGE AI gym website factory.
> It preserves the source report's findings while separating verified/publicly reported/inferred information. Non-`VERIFIED_OFFICIAL` fields require owner verification before final-client production.

> Factory-level content excluded: Hero content/artwork, transformation data, Training Intelligence, Between Sessions education, section headings/labels, and discount percentages are intentionally excluded. No gym-specific transformation claims or unsupported health/nutrition/physiological claims are populated here.

Normalization note: The source report uses terms such as “verified” for some findings drawn from Google Business Profile evidence, directories, reviews, and inference. This package reserves `VERIFIED_OFFICIAL` for official/owner-provided evidence and marks third-party evidence `PUBLICLY_REPORTED`. Where the report does not identify exact source URLs or screenshot metadata, those limitations are recorded rather than fabricated.

## 1. BUSINESS

```yaml
BUSINESS:
  name:
    value: "Tiger Gym"
    source: "Google Business Profile snapshot described in Tiger Gym Business Research.pdf; cross-referenced with regional directories"
    status: VERIFIED_OFFICIAL
  tagline:
    value: null
    source: null
    status: NOT_FOUND
  description:
    value: "Independent commercial gym and fitness center in the Nanal Nagar / Toli Chowki area of Hyderabad, publicly reported to offer strength and weight training, cardio, personal training, CrossFit-style functional training, and kickboxing."
    source: "Tiger Gym Business Research.pdf, sections 1, 5, 9; synthesis of GBP and directory data"
    status: PUBLICLY_REPORTED
  category:
    value: "Commercial gym / fitness center"
    source: "Tiger Gym Business Research.pdf, sections 1 and 5"
    status: PUBLICLY_REPORTED
  primary_locality:
    value: "Nanal Nagar / Toli Chowki"
    source: "Tiger Gym Business Research.pdf, sections 1, 3, 4 and 6"
    status: PUBLICLY_REPORTED
  branch_count:
    value: 1
    source: "Tiger Gym Business Research.pdf, section 4; cross-referencing across local directories, maps and social sources as described in report"
    status: PUBLICLY_REPORTED
  year_established:
    value: 2016
    source: "Tiger Gym Business Research.pdf, section 5; multiple aggregator platforms reportedly list 2016; conflicting directory entry reports 1995"
    status: PUBLICLY_REPORTED
```

## 2. CONTACT

```yaml
CONTACT:
  phone:
    value: "+91 97000 56665"
    source: "Google Business Profile and local directories as described in Tiger Gym Business Research.pdf, sections 3, 4 and 7"
    status: PUBLICLY_REPORTED
  whatsapp:
    value: null
    source: "Tiger Gym Business Research.pdf, sections 4 and 7; report says assumed tied to primary mobile number but unverified"
    status: NOT_FOUND
  email:
    value: null
    source: "Tiger Gym Business Research.pdf, sections 4, 7 and 25; not publicly disclosed"
    status: NOT_FOUND
  website:
    value: null
    source: "Tiger Gym Business Research.pdf, sections 1, 3 and 23; search described in report found no proprietary website"
    status: NOT_FOUND
  instagram_url:
    value: null
    source: "Tiger Gym Business Research.pdf, section 17; official branch-specific Instagram not robustly verified"
    status: NOT_FOUND
  instagram_handle:
    value: null
    source: "Tiger Gym Business Research.pdf, sections 7 and 17"
    status: NOT_FOUND
  facebook_url:
    value: null
    source: "Tiger Gym Business Research.pdf, sections 1, 7 and 17; legacy profile handle reported as @Tigergymhyd, but exact URL is not printed"
    status: NOT_FOUND
  youtube_url:
    value: null
    source: "Tiger Gym Business Research.pdf, sections 7 and 17"
    status: NOT_FOUND
  booking_url:
    value: null
    source: "Tiger Gym Business Research.pdf, sections 4 and 7; report says enquiries rely on third-party aggregators but provides no exact booking URL"
    status: NOT_FOUND
```

## 3. LOCATION

```yaml
LOCATION:
  address_line:
    value: "1st Floor, Karol Bagh Road, Nanal Nagar X Road, opposite Premier Hospital"
    source: "Tiger Gym Business Research.pdf, sections 1, 4 and 6; GBP snapshot and regional directories as described"
    status: PUBLICLY_REPORTED
  locality:
    value: "Nanal Nagar / Toli Chowki"
    source: "Tiger Gym Business Research.pdf, sections 1, 4 and 6"
    status: PUBLICLY_REPORTED
  city:
    value: "Hyderabad"
    source: "Tiger Gym Business Research.pdf, sections 1 and 4"
    status: PUBLICLY_REPORTED
  state:
    value: "Telangana"
    source: "Tiger Gym Business Research.pdf, section 1"
    status: PUBLICLY_REPORTED
  postal_code:
    value: "500008"
    source: "Tiger Gym Business Research.pdf, sections 4 and 6; one sentence on page 1 contains a malformed superscript/footnote rendering as '5000082', while the branch table and later section state 500008"
    status: PUBLICLY_REPORTED
  landmark:
    value: "Opposite Premier Hospital; Quba Masjid also noted as nearby"
    source: "Tiger Gym Business Research.pdf, section 6"
    status: PUBLICLY_REPORTED
  map_url:
    value: null
    source: "Tiger Gym Business Research.pdf, section 4 says Google Maps URL is visible in GBP interface but does not reproduce the URL"
    status: NOT_FOUND
  latitude:
    value: null
    source: "Tiger Gym Business Research.pdf, sections 23 and 26 refer to coordinates in GBP evidence but provide no numeric coordinates"
    status: NOT_FOUND
  longitude:
    value: null
    source: "Tiger Gym Business Research.pdf, sections 23 and 26 refer to coordinates in GBP evidence but provide no numeric coordinates"
    status: NOT_FOUND
```

## 4. HOURS

```yaml
HOURS:
  monday:
    open:
      value: "06:00"
      source: "Google Business Profile snapshot as described in Tiger Gym Business Research.pdf, section 8"
      status: PUBLICLY_REPORTED
    close:
      value: "23:00"
      source: "Google Business Profile snapshot as described in section 8; Justdial reportedly lists 22:30"
      status: CONFLICTING_SOURCES
  tuesday:
    open:
      value: "06:00"
      source: "Google Business Profile snapshot as described in section 8"
      status: PUBLICLY_REPORTED
    close:
      value: "23:00"
      source: "Google Business Profile snapshot as described in section 8; Justdial reportedly lists 22:30"
      status: CONFLICTING_SOURCES
  wednesday:
    open:
      value: "06:00"
      source: "Google Business Profile snapshot as described in section 8"
      status: PUBLICLY_REPORTED
    close:
      value: "23:00"
      source: "Google Business Profile snapshot as described in section 8; Justdial reportedly lists 22:30"
      status: CONFLICTING_SOURCES
  thursday:
    open:
      value: "06:00"
      source: "Google Business Profile snapshot as described in section 8"
      status: PUBLICLY_REPORTED
    close:
      value: "23:00"
      source: "Google Business Profile snapshot as described in section 8; Justdial reportedly lists 22:30"
      status: CONFLICTING_SOURCES
  friday:
    open:
      value: "06:00"
      source: "Google Business Profile snapshot as described in section 8"
      status: PUBLICLY_REPORTED
    close:
      value: "23:00"
      source: "Google Business Profile snapshot as described in section 8; Justdial reportedly lists 22:30"
      status: CONFLICTING_SOURCES
  saturday:
    open:
      value: "06:00"
      source: "Google Business Profile snapshot as described in section 8"
      status: PUBLICLY_REPORTED
    close:
      value: "23:00"
      source: "Google Business Profile snapshot as described in section 8; Justdial reportedly lists 22:30"
      status: CONFLICTING_SOURCES
  sunday:
    open:
      value: null
      source: "Tiger Gym Business Research.pdf, section 8; report says Sunday hours require business confirmation"
      status: NOT_FOUND
    close:
      value: null
      source: "Tiger Gym Business Research.pdf, section 8; report says Sunday hours require business confirmation"
      status: NOT_FOUND
  split_shifts_reported:
    value: null
    source: "Tiger Gym Business Research.pdf, section 8; no split shifts described"
    status: NOT_FOUND
```

## 5. ABOUT

```yaml
ABOUT:
  short_description:
    value: "An independent gym reported to be located on the first floor on Karol Bagh Road at Nanal Nagar X Road, opposite Premier Hospital, Hyderabad."
    source: "Tiger Gym Business Research.pdf, sections 1, 4 and 6"
    status: PUBLICLY_REPORTED
  positioning:
    value: "Public research describes a neighborhood gym with a broad equipment roster, air conditioning, and hands-on coaching. The characterization as owner-driven and beginner-friendly is synthesized from directory information and review themes."
    source: "Tiger Gym Business Research.pdf, sections 5, 10, 12, 16 and 20"
    status: INFERRED
  story:
    value: null
    source: "Tiger Gym Business Research.pdf, section 5 identifies 2016 as the more commonly reported establishment year but does not provide an owner-supplied founding story"
    status: NOT_FOUND
  zones:
    - id: "strength"
      label: "Strength and free weights"
      value: "Strength area with free weights, heavy machinery, plate-loaded and selectorized equipment; specific equipment includes leg press, Hammer Strength machinery, inclined bench press and cable crossover stations."
      source: "Tiger Gym Business Research.pdf, sections 9-11"
      status: PUBLICLY_REPORTED
    - id: "cardio"
      label: "Cardio"
      value: "Cardiovascular equipment reportedly includes treadmills, cycling apparatus, endurance machines and a stair stepper."
      source: "Tiger Gym Business Research.pdf, sections 9 and 11"
      status: PUBLICLY_REPORTED
    - id: "functional"
      label: "Functional training"
      value: "CrossFit-style training is listed in the Google Business Profile and functional equipment such as plyo boxes is reported."
      source: "Tiger Gym Business Research.pdf, sections 9 and 11"
      status: PUBLICLY_REPORTED
    - id: "kickboxing"
      label: "Kickboxing"
      value: "Kickboxing is listed as a program in the source report's account of the Google Business Profile."
      source: "Tiger Gym Business Research.pdf, section 9"
      status: PUBLICLY_REPORTED
  attributes:
    - id: "air-conditioning"
      label: "Air-conditioned environment"
      value: true
      source: "Tiger Gym Business Research.pdf, sections 10, 12 and 16; multiple reviews reportedly mention air conditioning"
      status: PUBLICLY_REPORTED
    - id: "changing-rooms"
      label: "Changing rooms"
      value: "Reported in directory tags; confirm with management"
      source: "Tiger Gym Business Research.pdf, section 10"
      status: PUBLICLY_REPORTED
    - id: "drinking-water"
      label: "Drinking water dispensers"
      value: "Reported on the gym floor"
      source: "Tiger Gym Business Research.pdf, section 12"
      status: PUBLICLY_REPORTED
    - id: "hygiene"
      label: "Cleanliness and maintenance"
      value: "Positive cleanliness feedback appears repeatedly in reviews summarized by the report"
      source: "Tiger Gym Business Research.pdf, sections 10 and 16"
      status: PUBLICLY_REPORTED
    - id: "parking"
      label: "Street-level parking"
      value: "Report says street-level parking is available along Karol Bagh Road; actual availability and restrictions require confirmation"
      source: "Tiger Gym Business Research.pdf, sections 10 and 22"
      status: PUBLICLY_REPORTED
    - id: "accessibility"
      label: "Wheelchair access"
      value: null
      source: "Tiger Gym Business Research.pdf, section 6 flags a secondary aggregator accessibility tag as suspect because the gym is on the first floor"
      status: NOT_FOUND
    - id: "swimming-pool"
      label: "Swimming pool"
      value: null
      source: "Tiger Gym Business Research.pdf, sections 10 and 24; secondary directory tag conflicts with location and absence of visual evidence"
      status: CONFLICTING_SOURCES
```

## 6. PROGRAMS

```yaml
PROGRAMS:
  - id: "weight-training"
    name: "Weight Training"
    description: "Weight training and strengthening exercises are reported as core offerings, supported by free weights and machine-based equipment."
    category: "strength"
    image_opportunity: "Training-floor or free-weight image from the operator-approved photo set."
    source: "Tiger Gym Business Research.pdf, section 9"
    status: PUBLICLY_REPORTED
  - id: "cardio"
    name: "Cardiovascular Fitness"
    description: "Cardiovascular training supported by treadmills, cycling apparatus, endurance machines and a stair stepper, as reported in the research."
    category: "conditioning"
    image_opportunity: "Cardio-equipment image from the operator-approved photo set."
    source: "Tiger Gym Business Research.pdf, sections 9 and 11"
    status: PUBLICLY_REPORTED
  - id: "personal-training"
    name: "Personal Training"
    description: "One-to-one coaching is reported; reviews are described as mentioning progress tracking and workout-routine updates."
    category: "personal"
    image_opportunity: "Coach guiding a member on the gym floor, photographed with operator approval."
    source: "Tiger Gym Business Research.pdf, sections 9, 12 and 16"
    status: PUBLICLY_REPORTED
  - id: "crossfit-style"
    name: "CrossFit-style / Functional Training"
    description: "CrossFit-style training is listed in the reported GBP categories; exact class format and schedule are not supplied."
    category: "conditioning"
    image_opportunity: "Functional-training equipment or action image from the operator-approved photo set."
    source: "Tiger Gym Business Research.pdf, sections 9 and 11"
    status: PUBLICLY_REPORTED
  - id: "kickboxing"
    name: "Kickboxing"
    description: "Kickboxing is listed in the report's account of the GBP; class details and schedule are not provided."
    category: "martial_arts"
    image_opportunity: "Kickboxing action image from the operator-approved photo set, if the service is confirmed by management."
    source: "Tiger Gym Business Research.pdf, section 9"
    status: PUBLICLY_REPORTED
  - id: "youth-classes"
    name: "Youth Classes"
    description: "Youth Classes are mentioned in public service listings summarized by the report; ages, eligibility and schedule are unknown."
    category: "group"
    image_opportunity: "Youth class image only if the program is confirmed and all required guardian permissions are secured."
    source: "Tiger Gym Business Research.pdf, section 9"
    status: PUBLICLY_REPORTED
  - id: "adult-sports"
    name: "Adult Sports"
    description: "Adult Sports programming is mentioned in public service listings summarized by the report; activities and schedule are unspecified."
    category: "group"
    image_opportunity: "Relevant activity image from the operator-approved photo set after the exact program is confirmed."
    source: "Tiger Gym Business Research.pdf, section 9"
    status: PUBLICLY_REPORTED
  - id: "yoga"
    name: "Yoga / Vinyasa Yoga"
    description: "Secondary directories apply yoga-related tags, but the report found no photographic evidence or specific testimonials supporting dedicated classes. Do not publish without owner confirmation."
    category: "other"
    image_opportunity: "No image should be selected unless management confirms an active program and supplies/approves relevant imagery."
    source: "Tiger Gym Business Research.pdf, section 9"
    status: CONFLICTING_SOURCES
  - id: "weight-management"
    name: "Weight Management"
    description: "Weight management appears as a documented service term in the report; precise service scope and any nutrition or medical component are not established."
    category: "other"
    image_opportunity: "General training image only; do not imply guaranteed weight loss or a clinical service."
    source: "Tiger Gym Business Research.pdf, sections 5 and 21"
    status: PUBLICLY_REPORTED
  - id: "body-transformation-package"
    name: "Body Transformation Package"
    description: "The report lists a 48-session package at ₹40,000 in aggregator data. Package availability, inclusions and current price require direct confirmation; no outcome metrics are available."
    category: "personal"
    image_opportunity: "Coach/member training image; do not use before-and-after imagery without client consent and owner approval."
    source: "Tiger Gym Business Research.pdf, sections 13 and 19"
    status: PUBLICLY_REPORTED
```

## 7. WHY_CHOOSE_US

```yaml
WHY_CHOOSE_US:
  - title: "Air-conditioned training environment"
    description: "Multiple reviews summarized in the report mention the air-conditioned facility."
    basis: "Repeated review mentions; not an owner-supplied claim."
    source: "Tiger Gym Business Research.pdf, sections 10, 16 and 20"
    status: PUBLICLY_REPORTED
  - title: "Broad equipment selection"
    description: "The report identifies equipment including leg press, Hammer Strength machinery, inclined bench press, stair stepper, plyo boxes, tricep bars, ankle weights and cable crossover stations."
    basis: "Equipment references from GBP media, reviews and directory filters as described by the source report."
    source: "Tiger Gym Business Research.pdf, section 11"
    status: PUBLICLY_REPORTED
  - title: "Personal coaching and routine follow-up"
    description: "Review themes summarized in the report mention trainers tracking member progress and updating workout routines."
    basis: "Synthesis of customer reviews; does not establish a guaranteed result."
    source: "Tiger Gym Business Research.pdf, sections 12, 16 and 20"
    status: PUBLICLY_REPORTED
  - title: "Beginner-supportive atmosphere"
    description: "Reviews summarized in the report describe cooperative trainers and a friendly environment for beginners."
    basis: "Review sentiment, not a formal service guarantee."
    source: "Tiger Gym Business Research.pdf, sections 12 and 16"
    status: PUBLICLY_REPORTED
  - title: "Cleanliness feedback"
    description: "The report says reviewers frequently commend the gym's cleanliness and maintenance."
    basis: "Qualitative review themes."
    source: "Tiger Gym Business Research.pdf, sections 10 and 16"
    status: PUBLICLY_REPORTED
  - title: "High equipment density"
    description: "The report describes a wide range of machinery in a moderately sized floor area; it also notes congestion complaints during peak evening hours."
    basis: "Equipment inventory and review-theme synthesis. Do not describe the floor as spacious."
    source: "Tiger Gym Business Research.pdf, sections 10, 11 and 16"
    status: INFERRED
```

## 8. REVIEWS

```yaml
REVIEWS:
  google_rating:
    value: 4.7
    source: "Google Business Profile snapshot described in Tiger Gym Business Research.pdf, sections 1 and 15; reported as checked in October 2026"
    status: PUBLICLY_REPORTED
  google_review_count:
    value: 237
    source: "Google Business Profile snapshot described in Tiger Gym Business Research.pdf, sections 1 and 15"
    status: PUBLICLY_REPORTED
  google_profile_url:
    value: null
    source: "Tiger Gym Business Research.pdf; exact GBP URL is not reproduced"
    status: NOT_FOUND
  rating_read_on:
    value: "October 2026 (exact day not provided)"
    source: "Tiger Gym Business Research.pdf, section 15"
    status: PUBLICLY_REPORTED
  selected_reviews:
    - reviewer: "Sumaiya sultana"
      quote: "Best gym for starters... very friendly atmosphere, trainers are very co-operative and understanding... they keep track of your progress."
      source: "Tiger Gym Business Research.pdf, section 16; original platform URL not supplied"
      status: PUBLICLY_REPORTED
    - reviewer: "Ruby khan"
      quote: "Tiger gym is Amazing. Amazing facilities, top equipments and great environment. Trainers are very supportive & friendly."
      source: "Tiger Gym Business Research.pdf, section 16; original platform URL not supplied"
      status: PUBLICLY_REPORTED
    - reviewer: "ADIL Khan"
      quote: "Tiger Gym is fantastic! The gym is clean and well-maintained with knowledgeable trainers who are always ready to help. The air-conditioned facility is easily accessible..."
      source: "Tiger Gym Business Research.pdf, section 16; original platform URL not supplied"
      status: PUBLICLY_REPORTED
  sentiment_summary:
    value: "The report synthesizes positive themes around trainer attentiveness, progress tracking, cleanliness, air conditioning, equipment variety and beginner friendliness. A recurring negative/mixed theme is floor congestion, particularly during peak evening hours. Isolated value concerns are also mentioned."
    source: "Tiger Gym Business Research.pdf, section 16; semantic synthesis of reviews across platforms"
    status: INFERRED
  other_platforms:
    - platform: "Justdial"
      rating:
        value: 4.9
        source: "Tiger Gym Business Research.pdf, sections 4 and 15"
        status: PUBLICLY_REPORTED
      review_count:
        value: 279
        source: "Tiger Gym Business Research.pdf, sections 4 and 15"
        status: PUBLICLY_REPORTED
```

## 9. PRICING

```yaml
PRICING:
  currency:
    value: "INR (₹)"
    source: "Tiger Gym Business Research.pdf, section 13"
    status: PUBLICLY_REPORTED
  publishes_pricing_publicly:
    value: true
    source: "Tiger Gym Business Research.pdf, section 13; prices reportedly extracted from regional aggregator catalogs, not an official gym-owned pricing page"
    status: PUBLICLY_REPORTED
  plans:
    daily:
      value: "₹150–₹250 (1 day pass; ₹150 described as most frequently cited)"
      source: "Tiger Gym Business Research.pdf, section 13; aggregator catalogs"
      status: PUBLICLY_REPORTED
    weekly:
      value: null
      source: null
      status: NOT_FOUND
    monthly:
      value: "₹2,000"
      source: "Tiger Gym Business Research.pdf, section 13; aggregator catalogs"
      status: PUBLICLY_REPORTED
    quarterly:
      value: "₹6,500"
      source: "Tiger Gym Business Research.pdf, section 13; aggregator catalogs"
      status: PUBLICLY_REPORTED
    half_year:
      value: "₹8,500"
      source: "Tiger Gym Business Research.pdf, section 13; aggregator catalogs"
      status: PUBLICLY_REPORTED
    annual:
      value: "₹12,000–₹14,000"
      source: "Tiger Gym Business Research.pdf, section 13; aggregator catalogs"
      status: PUBLICLY_REPORTED
    special_training:
      value:
        - name: "Personal Training (3 months)"
          price: "₹24,000"
          note: "Source report says price may vary by trainer seniority and requires direct confirmation."
        - name: "Body Transformation (48 sessions)"
          price: "₹40,000"
          note: "No verified transformation outcome metrics are available."
      source: "Tiger Gym Business Research.pdf, section 13; aggregator catalogs"
      status: PUBLICLY_REPORTED
  other_listed_prices:
    value: null
    source: "No other specific prices listed in the source report beyond the plans above"
    status: NOT_FOUND
  admission_or_joining_fee:
    value: null
    source: "Tiger Gym Business Research.pdf, section 25; exact joining/admission fee not provided"
    status: NOT_FOUND
  publication_warning:
    value: "Do not publish prices as current/official until the owner confirms them. The report explicitly warns that aggregator baselines may vary due to walk-in negotiation, seasonal promotions and pricing changes."
    source: "Tiger Gym Business Research.pdf, sections 13 and 25"
    status: PUBLICLY_REPORTED
```

## 10. INSTAGRAM

```yaml
INSTAGRAM:
  profile_url:
    value: null
    source: "Tiger Gym Business Research.pdf, sections 7 and 17; no official branch-specific Instagram profile robustly verified"
    status: NOT_FOUND
  handle:
    value: null
    source: "Tiger Gym Business Research.pdf, section 17"
    status: NOT_FOUND
  follower_count:
    value: null
    source: "Tiger Gym Business Research.pdf; no verified Instagram profile or follower count supplied"
    status: NOT_FOUND
  items: []
```

Official-profile information and individual content URLs must remain distinct. No Reel URLs were included in the source report. Do not create or infer individual Instagram content URLs.

## 11. FAQ

```yaml
FAQ:
  - question: "Where is Tiger Gym located?"
    answer: "The research report lists Tiger Gym at 1st Floor, Karol Bagh Road, Nanal Nagar X Road, opposite Premier Hospital, in Hyderabad. Confirm the exact address wording with management before launch."
    topic: "location"
    source: "Tiger Gym Business Research.pdf, sections 1, 4 and 6"
    status: PUBLICLY_REPORTED
  - question: "What are the gym's opening hours?"
    answer: "The Google Business Profile information described in the report lists 6:00 AM to 11:00 PM Monday through Saturday. Justdial reportedly lists a 10:30 PM closing time, and Sunday hours require confirmation. Do not publish definitive hours until management verifies them."
    topic: "hours"
    source: "Tiger Gym Business Research.pdf, section 8"
    status: CONFLICTING_SOURCES
  - question: "Does Tiger Gym have air conditioning?"
    answer: "The report says multiple customer reviews mention an air-conditioned environment. Owner confirmation is recommended before final production."
    topic: "amenities"
    source: "Tiger Gym Business Research.pdf, sections 10 and 16"
    status: PUBLICLY_REPORTED
  - question: "What training programs are listed?"
    answer: "The report lists weight training, cardiovascular fitness, personal training, CrossFit-style training, kickboxing, youth classes and adult sports. Exact class details and schedules are not supplied; confirm active programs with management."
    topic: "programs"
    source: "Tiger Gym Business Research.pdf, section 9"
    status: PUBLICLY_REPORTED
  - question: "Is parking available?"
    answer: "The report says street-level parking is available along Karol Bagh Road, but practical availability and restrictions are not established. Confirm with management."
    topic: "parking"
    source: "Tiger Gym Business Research.pdf, section 10"
    status: PUBLICLY_REPORTED
  - question: "Does Tiger Gym have a swimming pool?"
    answer: "The report found a conflicting swimming-pool tag in some secondary directories and says it should be excluded because it is unsupported by visual evidence. Do not claim that a pool is available."
    topic: "facilities"
    source: "Tiger Gym Business Research.pdf, sections 10 and 24"
    status: CONFLICTING_SOURCES
  - question: "Are yoga classes available?"
    answer: "Some secondary directories apply yoga-related tags, but the report found no specific supporting photographic evidence or testimonials. Confirm with management before listing yoga."
    topic: "classes"
    source: "Tiger Gym Business Research.pdf, section 9"
    status: CONFLICTING_SOURCES
  - question: "What are the current membership prices?"
    answer: "Third-party directory prices are listed in the research package, but they are not confirmed as current official prices. Contact the gym directly for confirmed rates."
    topic: "pricing"
    source: "Tiger Gym Business Research.pdf, sections 13 and 25"
    status: PUBLICLY_REPORTED
  - question: "Is the gym wheelchair accessible?"
    answer: "The report flags a directory accessibility tag as suspect because the gym is on the first floor and does not provide verified elevator/access details. Confirm accessibility with management."
    topic: "accessibility"
    source: "Tiger Gym Business Research.pdf, section 6"
    status: NOT_FOUND
```

## 12. SEO

```yaml
SEO:
  gym_name:
    value: "Tiger Gym"
    source: "Tiger Gym Business Research.pdf, sections 1 and 21"
    status: PUBLICLY_REPORTED
  locality:
    value: "Nanal Nagar / Toli Chowki"
    source: "Tiger Gym Business Research.pdf, section 21"
    status: PUBLICLY_REPORTED
  city:
    value: "Hyderabad"
    source: "Tiger Gym Business Research.pdf, section 21"
    status: PUBLICLY_REPORTED
  natural_location_wording:
    value:
      - "Tiger Gym in Nanal Nagar, Toli Chowki, Hyderabad"
      - "Gym near Premier Hospital on Karol Bagh Road"
    source: "Derived from the reported business name, address and landmark"
    status: INFERRED
  title_candidate:
    value: "Tiger Gym Toli Chowki | Nanal Nagar, Hyderabad"
    source: "Derived from SEO material in Tiger Gym Business Research.pdf, section 21"
    status: INFERRED
  description_candidate:
    value: "Explore Tiger Gym in Nanal Nagar, Toli Chowki, Hyderabad. Check location, reported training options and contact details; confirm current hours and membership prices directly with the gym."
    source: "Derived from source-reported location and service terms; deliberately avoids unverified offers and performance claims"
    status: INFERRED
  alt_text_context:
    value:
      - "Tiger Gym training floor in Nanal Nagar, Hyderabad (only if an approved, authentic image depicts it)"
      - "Strength-training equipment at Tiger Gym, Toli Chowki (only if the specific equipment is visible in the approved image)"
      - "Cardio equipment at Tiger Gym, Hyderabad (only if the specific equipment is visible in the approved image)"
    source: "Derived from the reported locality and equipment inventory; alt text must describe the actual supplied image"
    status: INFERRED
  documented_service_terms:
    value: ["weight training", "personal training", "CrossFit-style training", "kickboxing", "cardiovascular fitness", "weight management"]
    source: "Tiger Gym Business Research.pdf, sections 9 and 21"
    status: PUBLICLY_REPORTED
  secondary_localities:
    value: ["Mehdipatnam", "Khader Bagh", "Indira Nagar", "Karol Bagh Road"]
    source: "Tiger Gym Business Research.pdf, sections 6 and 21"
    status: PUBLICLY_REPORTED
```

## 13. ASSET_MANIFEST

```yaml
ASSET_MANIFEST:
  logo:
    value: null
    source: "Tiger Gym Business Research.pdf; no downloadable or exact logo asset URL supplied"
    usable: "unknown"
    status: NOT_FOUND
  candidates:
    - role: "about_interior"
      url: null
      subject: "Authentic interior image showing the actual gym floor and equipment; collect manually from the operator or obtain explicit usage approval"
      source: "Operator to collect manually; source report describes GBP/user-uploaded media but does not provide reusable asset URLs"
      usable: "unknown"
      status: NOT_FOUND
    - role: "why_choose_anchor"
      url: null
      subject: "Approved image of the actual air-conditioned training environment or coaching interaction"
      source: "Operator to collect manually"
      usable: "unknown"
      status: NOT_FOUND
    - role: "gallery"
      url: null
      subject: "High-resolution gym interior, equipment and training photographs from the operator-approved photo set"
      source: "Tiger Gym Business Research.pdf, section 25; recommends collecting high-resolution interior photography"
      usable: "unknown"
      status: NOT_FOUND
    - role: "pricing_background"
      url: null
      subject: "Actual gym interior/equipment image approved by the operator"
      source: "Operator to collect manually"
      usable: "unknown"
      status: NOT_FOUND
    - role: "faq_background"
      url: null
      subject: "Actual gym interior or entrance image approved by the operator"
      source: "Operator to collect manually"
      usable: "unknown"
      status: NOT_FOUND
    - role: "og_image"
      url: null
      subject: "Operator-approved brand/fitness image for social sharing; do not synthesize a claim of official brand ownership"
      source: "Operator to collect manually"
      usable: "unknown"
      status: NOT_FOUND
```

Do not download, hotlink, or claim ownership of third-party photographs. The report refers to GBP snapshot/video and user-uploaded media but provides no exact media URLs or reuse permissions.

## 14. SOURCE_LOG

```yaml
SOURCE_LOG:
  - priority: 1
    type: "Google Business Profile snapshot / interface evidence described by the report"
    url: null
    accessed: "October 2026 (exact date not supplied)"
    fields_supplied: ["business name", "phone", "location/address context", "hours", "rating/review count", "service categories", "some equipment/media evidence"]
    note: "Primary identity anchor according to the report. Exact GBP URL and screenshot file metadata are not reproduced in the PDF."
  - priority: 2
    type: "Google Maps presence and user-uploaded media described by the report"
    url: null
    accessed: "October 2026 (exact date not supplied)"
    fields_supplied: ["location context", "coordinates referenced but not printed", "visual equipment evidence"]
    note: "Exact map URL and coordinates are not included in the report."
  - priority: 5
    type: "Justdial"
    url: null
    accessed: "October 2026 (exact date not supplied)"
    fields_supplied: ["alternative closing time", "rating/review count", "service/facility tags", "pricing data"]
    note: "Third-party directory; exact listing URL is not supplied. Reported 4.9 rating and 279 reviews."
  - priority: 5
    type: "Magicpin and regional aggregator directories"
    url: null
    accessed: "October 2026 (exact date not supplied)"
    fields_supplied: ["business footprint cross-check", "pricing history", "facility/service tags"]
    note: "Third-party sources; exact URLs not supplied."
  - priority: 5
    type: "HexaHealth and Lybrate listings"
    url: null
    accessed: "October 2026 (exact date not supplied)"
    fields_supplied: ["regional directory context and granular facility tags"]
    note: "Third-party sources; exact URLs not supplied."
  - priority: 5
    type: "Customer reviews across public platforms"
    url: null
    accessed: "October 2026 (exact date not supplied)"
    fields_supplied: ["selected review quotations", "sentiment themes on coaching, cleanliness, air conditioning, equipment and congestion"]
    note: "Original review URLs are not reproduced; quotes should be rechecked and permission/attribution practices confirmed before production."
  - priority: 7
    type: "Legacy Facebook profile"
    url: null
    accessed: "October 2026 (exact date not supplied)"
    fields_supplied: ["reported handle @Tigergymhyd", "historical profile/activity context"]
    note: "Exact URL not supplied; report characterizes it as a legacy profile."
  - priority: 7
    type: "Secondary directory metadata tags"
    url: null
    accessed: "October 2026 (exact date not supplied)"
    fields_supplied: ["wheelchair-accessibility tag", "swimming-pool tag", "yoga-related tags"]
    note: "Report explicitly questions these tags; do not treat them as confirmed capabilities."
  - priority: 8
    type: "Other directory entry cited for historical business age"
    url: null
    accessed: "October 2026 (exact date not supplied)"
    fields_supplied: ["conflicting establishment year of 1995"]
    note: "Exact directory identity/URL is not reproduced; conflict retained."
```

## 15. VERIFICATION_NOTES

### conflicts

```yaml
conflicts:
  - field: "HOURS.*.close"
    values:
      - value: "23:00"
        source: "Google Business Profile snapshot as described in Tiger Gym Business Research.pdf, section 8"
      - value: "22:30"
        source: "Justdial as described in Tiger Gym Business Research.pdf, section 8"
    note: "Do not publish definitive closing hours until management confirms the actual customer access/closing time."
    status: CONFLICTING_SOURCES
  - field: "HOURS.sunday"
    values:
      - value: "Seven-day operation implied by GBP, according to report"
        source: "Tiger Gym Business Research.pdf, section 8"
      - value: "Sunday hours require confirmation"
        source: "Tiger Gym Business Research.pdf, section 8"
    note: "Sunday opening and closing times are not stated clearly. Obtain exact Sunday and holiday hours from management."
    status: CONFLICTING_SOURCES
  - field: "BUSINESS.year_established"
    values:
      - value: 2016
        source: "Multiple aggregator platforms as summarized in Tiger Gym Business Research.pdf, section 5"
      - value: 1995
        source: "One isolated directory entry as summarized in Tiger Gym Business Research.pdf, section 5"
    note: "Do not silently resolve. The report considers 2016 more likely for the current business iteration, but owner confirmation is required."
    status: CONFLICTING_SOURCES
  - field: "LOCATION.address_line.floor"
    values:
      - value: "1st Floor"
        source: "Tiger Gym Business Research.pdf, sections 1, 4 and 6"
    note: "The source report consistently states 1st Floor; no alternate floor value was identified in the available report. Confirm exact address wording with management before production."
    status: PUBLICLY_REPORTED
  - field: "ABOUT.attributes.swimming-pool"
    values:
      - value: "Swimming Pool tag"
        source: "Secondary directory tags described in Tiger Gym Business Research.pdf, sections 10 and 24"
      - value: "No visual evidence; report considers tag erroneous"
        source: "Tiger Gym Business Research.pdf, sections 10 and 24"
    note: "Exclude swimming pool from website content unless the operator provides direct, unambiguous confirmation."
    status: CONFLICTING_SOURCES
  - field: "PROGRAMS.yoga"
    values:
      - value: "Yoga / Vinyasa Yoga tags"
        source: "Secondary directories described in Tiger Gym Business Research.pdf, section 9"
      - value: "No supporting photo evidence or specific testimonials found"
        source: "Tiger Gym Business Research.pdf, section 9"
    note: "Do not list yoga classes until the operator confirms they are currently offered."
    status: CONFLICTING_SOURCES
  - field: "LOCATION.postal_code"
    values:
      - value: "500008"
        source: "Branch table and section 6 of Tiger Gym Business Research.pdf"
      - value: "5000082"
        source: "Malformed footnote/superscript rendering in section 1 text"
    note: "The branch table and later section consistently use 500008. Confirm postal code if exact postal validation is needed; the malformed string appears to include a footnote marker."
    status: CONFLICTING_SOURCES
```

### not_found

```yaml
not_found:
  - field: "CONTACT.email"
    note: "Report says not publicly disclosed; request an official monitored email from management."
    sources_searched: ["Google Business Profile context", "local directories as described in report"]
    status: NOT_FOUND
  - field: "CONTACT.website"
    note: "Report describes searches across search engines, local directories, social bios, phone/address combinations and domain variations; no valid official domain found."
    sources_searched: ["search engine results", "local directories", "social media bios", "domain variation checks"]
    status: NOT_FOUND
  - field: "LOCATION.map_url"
    note: "Report says map link was visible in GBP interface but does not reproduce it."
    sources_searched: ["Google Business Profile interface as described in report"]
    status: NOT_FOUND
  - field: "LOCATION.latitude / LOCATION.longitude"
    note: "Coordinates are referred to but numeric values are absent from the report."
    sources_searched: ["GBP evidence described in report"]
    status: NOT_FOUND
  - field: "REVIEWS.google_profile_url"
    note: "Exact profile URL not reproduced."
    sources_searched: ["Google Business Profile evidence described in report"]
    status: NOT_FOUND
  - field: "CONTACT.instagram_url / CONTACT.instagram_handle / INSTAGRAM.*"
    note: "Official branch-specific Instagram account and follower count were not robustly verified; no Reel URLs were supplied."
    sources_searched: ["social profile discovery described in report"]
    status: NOT_FOUND
  - field: "CONTACT.facebook_url"
    note: "Legacy handle @Tigergymhyd is reported, but exact URL is absent."
    sources_searched: ["legacy Facebook profile described in report"]
    status: NOT_FOUND
  - field: "CONTACT.booking_url"
    note: "Report says enquiries rely on third-party aggregators but supplies no exact booking or membership-enquiry URL."
    sources_searched: ["third-party aggregator references in report"]
    status: NOT_FOUND
  - field: "HOURS.sunday"
    note: "Exact Sunday hours and holiday closure policy are unresolved."
    sources_searched: ["GBP and secondary directories as described in report"]
    status: NOT_FOUND
  - field: "PRICING.plans.weekly / PRICING.admission_or_joining_fee"
    note: "No weekly price or joining fee is given."
    sources_searched: ["pricing matrix and missing-information list in report"]
    status: NOT_FOUND
  - field: "ABOUT.attributes.accessibility"
    note: "Wheelchair accessibility tag is explicitly considered suspect; lift/access details are missing."
    sources_searched: ["secondary directory metadata described in report"]
    status: NOT_FOUND
  - field: "ABOUT.attributes.nutrition / body-composition / physiotherapy"
    note: "Clinical nutrition, meal guidance, body-composition assessments and on-site physiotherapy are not explicitly documented."
    sources_searched: ["public channels summarized in report"]
    status: NOT_FOUND
  - field: "PROGRAMS.class_schedules"
    note: "No exact class timings or schedules supplied for kickboxing, CrossFit-style training, youth classes or adult sports."
    sources_searched: ["GBP and aggregator service catalogs as described in report"]
    status: NOT_FOUND
  - field: "ABOUT.trainer_credentials"
    note: "Owner/lead trainer credentials and junior trainer identities/qualifications are not verified."
    sources_searched: ["public listings/reviews described in report"]
    status: NOT_FOUND
  - field: "TRANSFORMATION_DATA"
    note: "No verified, consented quantitative before/after cases, body-fat changes or weight-loss case studies found."
    sources_searched: ["public online sources described in Tiger Gym Business Research.pdf, section 19"]
    status: NOT_FOUND
  - field: "ASSET_MANIFEST.logo / candidates"
    note: "No exact downloadable asset URLs or image reuse permissions are provided."
    sources_searched: ["media references in source report"]
    status: NOT_FOUND
```

### publicly_reported_only

- field: `BUSINESS.description`
  note: "Synthesized from public profile, directory and review material; owner approval required."
- field: `BUSINESS.category`
  note: "Derived from public listings; owner verification recommended."
- field: `BUSINESS.branch_count`
  note: "Single location is reported after directory cross-referencing; confirm with management."
- field: `BUSINESS.year_established`
  note: "Public directories mostly report 2016 but one reports 1995; owner confirmation required."
- field: `CONTACT.phone`
  note: "Consistent across public sources in the report, but confirm it is the current monitored number."
- field: `CONTACT.whatsapp`
  note: "Do not assume the primary mobile number is WhatsApp-enabled."
- field: `LOCATION.*`
  note: "Address, locality and landmark are third-party/GBP-reported; verify spelling and floor wording."
- field: `HOURS.*`
  note: "Opening hours have a closing-time conflict; Sunday is unresolved."
- field: `ABOUT.*`
  note: "Publicly described attributes and positioning require owner verification; accessibility and pool claims are unresolved."
- field: `PROGRAMS.*`
  note: "Public service listings do not confirm that every program is currently active; confirm each program and schedule."
- field: `WHY_CHOOSE_US.*`
  note: "Differentiators are grounded in reported reviews/equipment listings, not direct owner statements."
- field: `REVIEWS.selected_reviews`
  note: "Wording is reproduced as supplied by the research report; original URLs are missing and should be rechecked before publication."
- field: `PRICING.*`
  note: "All prices are third-party directory baselines, not confirmed current official rates."
- field: `FAQ.*`
  note: "FAQs derive from public reporting and must not be treated as owner-confirmed service commitments."
- field: `SEO.*`
  note: "SEO title/description and alt-text context are inferred drafts, not verified business facts."
- field: `ASSET_MANIFEST.*`
  note: "Operator must collect authentic assets and confirm usage rights."

### owner_questions

1. Confirm the official business name and whether “Tiger Gym Nanal Nagar” is an acceptable branch label.
2. Confirm the exact address, floor, road spelling, landmark wording and postal code.
3. Confirm the current primary phone number and whether it supports WhatsApp/WhatsApp Business.
4. Provide an official monitored email address.
5. Confirm whether an official website/domain exists or has recently been registered.
6. Provide the exact Google Maps/Google Business Profile URL and confirm the profile is controlled by the business.
7. Confirm whether the business was established in 2016 or whether an earlier date such as 1995 refers to a prior business history.
8. Confirm Monday–Saturday opening and closing times, resolve 10:30 PM vs 11:00 PM, and provide Sunday/holiday hours.
9. Confirm current prices for day pass, monthly, quarterly, half-yearly, annual, personal training and body-transformation packages; clarify inclusions, taxes, expiry and joining fees.
10. Confirm which listed programs are currently active: weight training, cardio, personal training, CrossFit-style training, kickboxing, youth classes, adult sports and weight management.
11. Confirm whether yoga is currently offered and provide details only if active.
12. Confirm current facilities: air conditioning, changing rooms, drinking water, parking, lift/accessibility and any other amenities.
13. Explicitly confirm that no swimming pool is offered, or provide direct evidence if the directory tag is accurate.
14. Confirm trainer names, roles, qualifications/certifications and approved biographies. Do not publish credentials without evidence.
15. Confirm whether owner/lead trainer name spelling is “Mohamed Yamani” or “Mahmood Yamani” and what name may be published.
16. Provide official Instagram/Facebook/YouTube URLs and approved Reel URLs, if any.
17. Provide high-resolution logo and authentic facility/equipment/coaching photography with permission for website use.
18. Confirm permission and attribution requirements for selected customer reviews and supply original review URLs if available.
19. Provide client-consented transformation stories and documented metrics only if they are to be used; otherwise keep transformation claims absent.
20. Confirm whether parking is actually available to members and any restrictions.
21. Confirm current accessibility details, including stairs/lift and wheelchair access.
22. Confirm whether the business's GHMC trade licence and other applicable compliance documentation are current; this is an operational verification item, not a website marketing claim.

## 16. EXCLUDED_BY_CONTRACT

```yaml
EXCLUDED_BY_CONTRACT:
  transformations:
    value: "No gym-specific transformation claims, before/after metrics, body-fat changes or weight-loss case studies included. Source report says verified quantitative transformation data is unavailable."
    source: "Tiger Gym Business Research.pdf, section 19"
    status: NOT_FOUND
  hero_copy_and_artwork:
    value: null
    source: "Factory/template layer; not part of normalized research"
    status: NOT_FOUND
  training_intelligence:
    value: null
    source: "Factory/template layer; not part of normalized research"
    status: NOT_FOUND
  between_sessions_education:
    value: null
    source: "Factory/template layer; not part of normalized research"
    status: NOT_FOUND
  section_headings_and_labels:
    value: null
    source: "Factory/template layer; not part of normalized research"
    status: NOT_FOUND
  discount_percentages:
    value: null
    source: "Factory/template layer; no discount percentages are normalized from this report"
    status: NOT_FOUND
  promotional_terms:
    value: null
    source: "No current owner-confirmed promotional terms supplied"
    status: NOT_FOUND
  unsupported_health_nutrition_or_physiological_claims:
    value: null
    source: "Conservative health-claim policy; no unverified outcome or medical promises included"
    status: NOT_FOUND
  swimming_pool_claim:
    value: null
    source: "Tiger Gym Business Research.pdf, sections 10 and 24; conflicting directory tag not supported by visual evidence"
    status: CONFLICTING_SOURCES
  unconfirmed_yoga_claim:
    value: null
    source: "Tiger Gym Business Research.pdf, section 9; secondary directory tags lack supporting evidence"
    status: CONFLICTING_SOURCES
```

## Normalization audit

- **Factual field sourcing:** Populated fields cite the source report section or source class; missing source URLs are explicitly identified.
- **Status discipline:** Third-party and review-derived claims are `PUBLICLY_REPORTED`; synthesized positioning/sentiment is `INFERRED`; no owner-provided facts were supplied in this task.
- **No invented contact details or URLs:** Missing exact URLs, email, WhatsApp, coordinates, Instagram data and assets remain null/empty.
- **Conflicts preserved:** Closing time, Sunday hours, establishment year, pool tag, yoga tags and postal-code rendering issue are recorded in `VERIFICATION_NOTES`.
- **Pricing uncertainty preserved:** Reported directory baselines are not represented as official/current prices.
- **Social uncertainty preserved:** `INSTAGRAM.items` remains `[]`; no Reel URLs invented.
- **No transformation claims:** No quantified outcomes or fabricated testimonials are added; review excerpts are preserved as quoted in the source report.
- **Factory exclusions respected:** Factory-wide creative/educational content and discount percentages are excluded from the research data.
- **No external research performed:** This package is based only on `Tiger Gym Business Research.pdf`.
