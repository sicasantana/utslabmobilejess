import React from 'react';
import { View, Text, ScrollView, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InfoCard from '../../components/infocard';

const TASKS = [
  { id: 1, title: 'Tugas MPSI', status: 'selesai' as const },
  { id: 2, title: 'Ujian Lab Mobile', status: 'proses' as const },
];

export default function Index() {
  const total = TASKS.length;
  const selesai = TASKS.filter((t) => t.status === 'selesai').length;
  const proses = total - selesai;
  const persen = Math.round((selesai / total) * 100);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.label}>MY WORKSPACE</Text>
        <Text style={styles.heading}>Daftar Tugas Jessica</Text>
        <Text style={styles.subtitle}>Kelola tugasmu dengan mudah.</Text>

        <View style={styles.summary}>
          <Text style={styles.summaryLabel}>Progres kamu</Text>
          <Text style={styles.summaryPercent}>{persen}%</Text>

          <View style={styles.track}>
            <View style={[styles.fill, { width: `${persen}%` }]} />
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{selesai}</Text>
              <Text style={styles.statText}>Selesai</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{proses}</Text>
              <Text style={styles.statText}>Dalam proses</Text>
            </View>
          </View>
        </View>

        <Text style={styles.section}>Tugas Saya</Text>

        {TASKS.map((task) => (
          <InfoCard
            key={task.id}
            title={task.title}
            status={task.status}
            onPress={() =>
              Alert.alert(
                'Detail',
                task.status === 'selesai'
                  ? 'Tugas sudah selesai! \n yay saatnya bobok'
                  : 'Tugas sedang dikerjakan! \n Deadline : 25 oktober 2026'
              )
            }
          />
        ))}

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F1FF',
  },

  container: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 22,
    paddingTop: 15,
    paddingBottom: 30,
  },

  label: {
    color: '#7555E8',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  heading: {
    color: '#292640',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 8,
  },

  subtitle: {
    color: '#85839A',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 24,
  },

  summary: {
    backgroundColor: '#7555E8',
    borderRadius: 24,
    padding: 22,
    marginBottom: 30,
    shadowColor: '#7555E8',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },

  summaryLabel: {
    color: '#D9D0FF',
    fontSize: 14,
    fontWeight: '600',
  },

  summaryPercent: {
    color: '#FFFFFF',
    fontSize: 44,
    fontWeight: 'bold',
    marginTop: 4,
  },

  track: {
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 4,
    marginTop: 10,
    overflow: 'hidden',
  },

  fill: {
    height: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
  },

  statsRow: {
    flexDirection: 'row',
    marginTop: 20,
  },

  statBox: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderRadius: 16,
    padding: 14,
    marginRight: 10,
  },

  statNumber: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  statText: {
    color: '#E4DDFF',
    fontSize: 12,
    marginTop: 2,
  },

  section: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#292640',
    marginBottom: 16,
  },
});
