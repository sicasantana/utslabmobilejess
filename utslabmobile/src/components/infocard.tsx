import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
    title: string;
    status: 'selesai' | 'proses';
    onPress: () => void;
};

export default function InfoCard({ title, status, onPress }: Props) {
    const selesai = status === 'selesai';
    const warna = selesai ? '#219568' : '#D98235';
    const warnaBg = selesai ? '#E0F5E9' : '#FFF0DF';
    const aksen = selesai ? '#6eba8155' : '#f59e426b';

    return (
        <View style={styles.card}>

        <View style={[styles.accent, { backgroundColor: aksen }]} />

        <View style={styles.content}>
            <Text style={styles.label}>TASK</Text>
            <Text style={styles.title}>{title}</Text>

            <View style={[styles.badge, { backgroundColor: warnaBg }]}>
            <View style={[styles.dot, { backgroundColor: aksen }]} />
            <Text style={[styles.badgeText, { color: warna }]}>
                {selesai ? 'Selesai' : 'Dalam Proses'}
            </Text>
            </View>

            <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            activeOpacity={0.85}
            >
            <Text style={styles.buttonText}>Lihat Detail  →</Text>
            </TouchableOpacity>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    marginBottom: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ECEAF5',
},

accent: {
    width: 6,
},

content: {
    flex: 1,
    padding: 18,
},

label: {
    fontSize: 10,
    color: '#9693AA',
    letterSpacing: 1,
},
title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#292640',
    marginVertical: 8,
},

badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
},

dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginRight: 6,
},

badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
},

button: {
    backgroundColor: '#2266c5',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
},

buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
},
});