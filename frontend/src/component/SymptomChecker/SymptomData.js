const symptomsData = [{
        symptom: "cough",
        response: "You may have a common cold or flu. Get plenty of rest and drink fluids.",
    },
    {
        symptom: "malaria",
        response: "To treat malaria, simply get pawpaw leave, mango leave, lemon grass, lime and grover leave. Add water, Boil everything together for some minutes, until the water changes its color. That's it. Enjoy it and watch how the malaria will leave you. ",
    },
    {
        symptom: "cold",
        response: "Feeling cold could be due to the weather. You can simply take any hot liquid like tea or coffee. However, if it is somthing serious, please visit your doctor immediately.",
    },
    {
        symptom: "tooth ache",
        response: "There are several things that could lead to this; too much sugary substances, not brushing your teeth right, some time cold substances. Avoid all of that. Get a warm water, add little salt to it, hold it in your mouth for some minutes, off your mouth. Try it for some days, if sympthom persist, please your doctor.",
    },
    {
        symptom: "fever",
        response: "A fever could be a sign of various infections. Consult a doctor for further evaluation.",
    },
    {
        symptom: "headache",
        response: "A headache can be caused by stress, tension, or other health issues. Try to relax and stay hydrated.",
    },
    {
        symptom: "fatigue",
        response: "Fatigue can be a symptom of many conditions. Ensure you're getting enough sleep and eating a balanced diet.",
    },
    {
        symptom: "sore throat",
        response: "A sore throat could be a sign of a viral or bacterial infection. Gargling with warm salt water may help alleviate symptoms.",
    },
    {
        symptom: "runny nose",
        response: "A runny nose is commonly caused by allergies or a cold. Stay hydrated and consider using saline nasal sprays to relieve congestion.",
    },
    {
        symptom: "muscle aches",
        response: "Muscle aches can be caused by overexertion, illness, or stress. Rest, hydration, and gentle stretching may help alleviate discomfort.",
    },
    {
        symptom: "shortness of breath",
        response: "Shortness of breath can indicate various health issues, including asthma or heart problems. Seek medical attention if it persists or worsens.",
    },
    {
        symptom: "nausea",
        response: "Nausea can be caused by a variety of factors, including food poisoning, motion sickness, or pregnancy. Rest and hydration may help settle your stomach.",
    },
    {
        symptom: "vomiting",
        response: "Vomiting is often a sign of stomach flu or food poisoning. Stay hydrated and avoid solid foods until symptoms subside.",
    },
    {
        symptom: "diarrhea",
        response: "Diarrhea can be caused by infections, food intolerances, or other digestive issues. Stay hydrated and avoid dairy and fatty foods.",
    },
    {
        symptom: "chest pain",
        response: "Chest pain can be a sign of heart problems, lung issues, or digestive disorders. Seek immediate medical attention if you experience chest pain.",
    },
    {
        symptom: "joint pain",
        response: "Joint pain can be caused by arthritis, injury, or inflammation. Gentle exercises, hot/cold therapy, and over-the-counter pain relievers may help alleviate symptoms.",
    },
    {
        symptom: "abdominal pain",
        response: "Abdominal pain can indicate various conditions, such as indigestion, gastritis, or appendicitis. Seek medical advice if you experience severe or persistent abdominal pain.",
    },
    {
        symptom: "dizziness",
        response: "Dizziness can be caused by dehydration, low blood pressure, or inner ear problems. Sit or lie down if you feel dizzy and avoid sudden movements.",
    },
    {
        symptom: "fatigue",
        response: "Fatigue can be a symptom of many conditions. Ensure you're getting enough sleep and eating a balanced diet.",
    },
    {
        symptom: "itchy skin",
        response: "Itchy skin can result from allergies, dryness, or skin conditions like eczema or psoriasis. Moisturize regularly and avoid scratching to prevent further irritation.",
    },
    {
        symptom: "weight loss",
        response: "Unexplained weight loss can be a sign of underlying health issues, such as thyroid problems, diabetes, or cancer. Consult a doctor if you experience significant weight loss without trying.",
    },
    {
        symptom: "swollen glands",
        response: "Swollen glands often indicate an infection, such as a cold or flu. Get plenty of rest, drink fluids, and consider over-the-counter pain relievers if needed.",
    },
    {
        symptom: "difficulty swallowing",
        response: "Difficulty swallowing can be caused by throat infections, acid reflux, or esophageal disorders. Avoid spicy or acidic foods and seek medical advice if symptoms persist.",
    },
    {
        symptom: "constipation",
        response: "Constipation can be caused by dehydration, lack of fiber, or certain medications. Increase your water and fiber intake and consider gentle laxatives if needed.",
    },
    {
        symptom: "diabetes",
        response: "Diabetes is a metabolic disorder characterized by high blood sugar levels. It requires careful management of diet, exercise, and medication to control blood sugar levels.",
    },
    {
        symptom: "anxiety",
        response: "Anxiety is a common mental health condition characterized by excessive worry or fear. Practice relaxation techniques, seek support from loved ones, and consider therapy or medication if symptoms are severe.",
    },
    {
        symptom: "depression",
        response: "Depression is a mood disorder that affects how you feel, think, and handle daily activities. Treatment may include therapy, medication, lifestyle changes, and support from loved ones.",
    },
    {
        symptom: "insomnia",
        response: "Insomnia is a sleep disorder characterized by difficulty falling asleep or staying asleep. Practice good sleep hygiene, avoid caffeine and electronic devices before bedtime, and consider therapy or medication if needed.",
    },
    {
        symptom: "shortness of breath",
        response: "Shortness of breath can indicate various health issues, including asthma, COPD, or heart problems. Seek medical attention if it persists or worsens.",
    },
    {
        symptom: "fatigue",
        response: "Fatigue can be a symptom of many conditions. Ensure you're getting enough sleep and eating a balanced diet.",
    },
    {
        symptom: "loss of appetite",
        response: "Loss of appetite can be caused by stress, depression, medication side effects, or underlying health issues. Try eating smaller, more frequent meals and include nutrient-rich foods in your diet.",
    },
    {
        symptom: "memory loss",
        response: "Memory loss can be a normal part of aging or a sign of dementia or other cognitive disorders. Stay mentally active, engage in regular exercise, and eat a healthy diet to support brain health.",
    },
    {
        symptom: "blurred vision",
        response: "Blurred vision can be caused by refractive errors, eye strain, or underlying health conditions like diabetes or glaucoma. Visit an eye doctor for a comprehensive eye exam if you experience persistent blurred vision.",
    },
    {
        symptom: "numbness or tingling",
        response: "Numbness or tingling sensations can be caused by nerve compression, vitamin deficiencies, or underlying health conditions like diabetes or multiple sclerosis. Consult a doctor for proper diagnosis and treatment.",
    },
    {
        symptom: "hair loss",
        response: "Hair loss can result from genetics, hormonal changes, medical conditions, or certain medications. Treatments may include medications, hair transplants, or lifestyle changes.",
    },
    {
        symptom: "irregular heartbeat",
        response: "An irregular heartbeat, or arrhythmia, can be harmless or indicate a serious heart condition. Seek medical attention if you experience palpitations, dizziness, or fainting.",
    },
    {
        symptom: "night sweats",
        response: "Night sweats can be a symptom of various conditions, including hormonal imbalances, infections, or certain medications. Keep your bedroom cool and comfortable and consult a doctor if night sweats are frequent or severe.",
    },
    {
        symptom: "rash",
        response: "A rash can be caused by allergic reactions, infections, or skin conditions like eczema or psoriasis. Treatments may include topical creams, antihistamines, or antibiotics depending on the cause.",
    },
    {
        symptom: "vision changes",
        response: "Vision changes can indicate eye problems or underlying health conditions like diabetes or high blood pressure. Visit an eye doctor for a comprehensive eye exam if you experience sudden or persistent vision changes.",
    },
    {
        symptom: "difficulty concentrating",
        response: "Difficulty concentrating can be caused by stress, anxiety, depression, or underlying health conditions like ADHD or sleep disorders. Practice mindfulness techniques, set realistic goals, and seek support from loved ones.",
    },
    {
        symptom: "bruising easily",
        response: "Bruising easily can result from aging, genetics, or underlying health conditions like vitamin deficiencies or blood disorders. Avoid activities that increase your risk of injury and consult a doctor if you experience unexplained bruising.",
    },
    {
        symptom: "sensitivity to light",
        response: "Sensitivity to light, or photophobia, can be a symptom of eye problems, migraines, or neurological conditions. Wear sunglasses, reduce screen time, and seek medical advice if light sensitivity is severe or persistent.",
    },
    {
        symptom: "muscle weakness",
        response: "Muscle weakness can be caused by overexertion, nerve damage, or underlying health conditions like muscular dystrophy or multiple sclerosis. Consult a doctor for proper diagnosis and treatment.",
    },
];

export default symptomsData;

// symptomsData.js