import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import { useState } from 'react';

// FAQ data
const faqs = [
  {
    question: "Qu'est-ce que MiniKif?",
    answer: "MiniKif est une application qui vous propose chaque jour de petits moments de joie et de plaisirs simples de la vie. Nous partageons des 'kifs' quotidiens pour vous aider à apprécier les petites choses qui font la beauté de la vie."
  },
  {
    question: "Comment fonctionne l'application?",
    answer: "Chaque jour, nous partageons de nouveaux 'kifs' - de petits moments de joie illustrés avec une description poétique. Vous pouvez les parcourir, les sauvegarder dans vos favoris, et même les partager par email ou recevoir des notifications."
  },
  {
    question: "Puis-je utiliser MiniKif sans créer un compte?",
    answer: "Oui, vous pouvez parcourir les 'kifs' quotidiens sans créer de compte. Cependant, pour sauvegarder vos favoris ou recevoir des notifications, vous devrez créer un compte."
  },
  {
    question: "Comment puis-je recevoir les kifs par email?",
    answer: "Sur chaque kif, vous trouverez un bouton 'Envoie moi par mail'. Cliquez dessus et suivez les instructions pour recevoir ce kif particulier ou pour vous abonner à nos envois quotidiens."
  },
  {
    question: "Comment puis-je contacter l'équipe MiniKif?",
    answer: "Vous pouvez nous contacter à support@minikif.com pour toute question, suggestion ou problème technique."
  }
];

export default function HelpScreen() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>
          M<Text style={[styles.logo, styles.yellowDot]}>i</Text>n
          <Text style={[styles.logo, styles.redDot]}>i</Text>K
          <Text style={[styles.logo, styles.greenDot]}>i</Text>f
        </Text>
        <Text style={styles.subtitle}>Aide & Information</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Foire Aux Questions</Text>
        
        {faqs.map((faq, index) => (
          <View key={index} style={styles.faqItem}>
            <TouchableOpacity 
              style={styles.questionContainer} 
              onPress={() => toggleExpand(index)}
            >
              <Text style={styles.question}>{faq.question}</Text>
              {expandedIndex === index ? (
                <ChevronUp size={20} color="#000" />
              ) : (
                <ChevronDown size={20} color="#000" />
              )}
            </TouchableOpacity>
            
            {expandedIndex === index && (
              <Text style={styles.answer}>{faq.answer}</Text>
            )}
          </View>
        ))}

        <View style={styles.aboutSection}>
          <Text style={styles.sectionTitle}>À propos de MiniKif</Text>
          <Text style={styles.aboutText}>
            MiniKif est né d'une idée simple : partager les petits moments de joie qui font la beauté de la vie quotidienne. 
            Notre mission est de vous aider à remarquer et apprécier ces instants précieux, souvent négligés dans notre vie trépidante.
          </Text>
          <Text style={styles.aboutText}>
            Chaque jour, nous vous proposons de nouveaux "kifs" - ces petits plaisirs qui nous font sourire, 
            nous émerveillent ou nous réconfortent. Ils sont accompagnés d'illustrations simples et de descriptions poétiques 
            qui capturent l'essence de ces moments.
          </Text>
          <Text style={styles.versionText}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
  },
  logo: {
    fontFamily: 'MiniKif-Bold',
    fontSize: 36,
    color: '#000000',
  },
  yellowDot: {
    color: '#FFD700',
  },
  redDot: {
    color: '#FF4500',
  },
  greenDot: {
    color: '#32CD32',
  },
  subtitle: {
    fontFamily: 'MiniKif-Regular',
    fontSize: 20,
    marginTop: 5,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 15,
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
    paddingRight: 10,
  },
  answer: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    lineHeight: 20,
  },
  aboutSection: {
    marginTop: 30,
    marginBottom: 50,
  },
  aboutText: {
    fontSize: 14,
    color: '#444',
    marginBottom: 15,
    lineHeight: 20,
  },
  versionText: {
    fontSize: 12,
    color: '#999',
    marginTop: 20,
    textAlign: 'center',
  },
});