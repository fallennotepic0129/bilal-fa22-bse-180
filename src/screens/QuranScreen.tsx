import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import useQuranData from '../hooks/useQuranData';

const QuranScreen = () => {
  const { surahs, loading } = useQuranData();
  const [expandedSurah, setExpandedSurah] = useState<number | null>(null);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const toggleSurah = (surahId: number) => {
    if (expandedSurah === surahId) {
      setExpandedSurah(null);
    } else {
      setExpandedSurah(surahId);
    }
  };

  return (
    <ScrollView>
      <Text>Asslamualaikum </Text>
      <FlatList
        data={surahs}
        keyExtractor={(item) => item.number.toString()}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => toggleSurah(item.number)}>
              <Text>{item.englishName} - {item.numberOfAyahs} verses</Text>
            </TouchableOpacity>
            {expandedSurah === item.number && (
              <View>
                {item.ayahs.map((ayah, index) => (
                  <Text key={index}>Ayah {ayah.number}: {ayah.text}</Text>
                ))}
              </View>
            )}
          </View>
        )}
      />
    </ScrollView>
  );
};

export default QuranScreen;
