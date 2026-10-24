import React, { useState } from 'react';
import { View,Text,TextInput,FlatList,StyleSheet,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const DAFTAR_MAHASISWA = [
    { id: '1', nama: 'Jessica Santana', prodi: 'Sistem Informasi' },
    { id: '2', nama: 'Ruyi Yoputri', prodi: 'Manajemen' },
    { id: '3', nama: 'Harizal Lim', prodi: 'Akuntansi' },
    { id: '4', nama: 'Nicky Chen', prodi: 'Teknik Sipil' },
    { id: '5', nama: 'Ferdy Indra Putra', prodi: 'Teknik Informatika' },
];

export default function Mahasiswa() {
    const [keyword, setKeyword] = useState('');

    const hasilFilter = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
);

    return (
    <SafeAreaView style={styles.container} edges={['top']}>
        <FlatList
        data={hasilFilter}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
            <View>
                <Text style={styles.label}>MY WORKSPACE</Text>
                <Text style={styles.judul}>Daftar Mahasiswa</Text>
                <Text style={styles.subtitle}>
                    Temukan mahasiswa dengan mudah
                </Text>

            <View style={styles.summary}>
                <View>
                    <Text style={styles.summaryLabel}>
                        Total Mahasiswa
                    </Text>
                    <Text style={styles.summaryNumber}>
                    {DAFTAR_MAHASISWA.length}
                    </Text>
                    <Text style={styles.summaryCaption}>
                        Mahasiswa terdaftar
                    </Text>
                </View>

            <View style={styles.summaryIcon}>
                <Ionicons
                    name="people"
                    size={38}
                    color="#FFFFFF"
                />
            </View>
            </View>

            <View style={styles.searchBox}>
                <Ionicons
                    name="search-outline"
                    size={22}
                    color="#2266c5"
            />

            <TextInput
                style={styles.input}
                placeholder="Cari nama mahasiswa..."
                placeholderTextColor="#9693AA"
                value={keyword}
                onChangeText={setKeyword}
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
            />
            </View>

            <View style={styles.sectionRow}>
                <Text style={styles.section}>
                    Semua mahasiswa
                </Text>

                <TouchableOpacity
                    style={styles.addButton}
                    activeOpacity={0.7}
                    onPress={() => {}}
                >
                    <Ionicons name="add" size={18} color="#2266c5" />
                    <Text style={styles.addButtonText}>Tambah Data</Text>
                </TouchableOpacity>
            </View>
        </View>
        }
        renderItem={({ item }) => (
            <View style={styles.card}>
                <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                    {item.nama.charAt(0)}
                </Text>
            </View>

            <View style={styles.info}>
                <Text style={styles.nama}>{item.nama}</Text>
                <Text style={styles.prodi}>{item.prodi}</Text>
            </View>
            </View>
        )}
        ListEmptyComponent={
            <View style={styles.emptyCard}>
                <Ionicons
                    name="search-outline"
                    size={38}
                    color="#2266c5"
                />
                <Text style={styles.emptyTitle}>
                    Data tidak ditemukan!
                </Text>
                <Text style={styles.emptySubtitle}>
                    Coba kata kunci nama lainnya.
                </Text>
            </View>
        }
    />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#F0F1FF',
},

listContent: {
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 25,
    flexGrow: 1,
},

label: {
    color: '#2266c5',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
},

judul: {
    color: '#292640',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 8,
},

subtitle: {
    color: '#85839A',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 22,
},

summary: {
    backgroundColor: '#2266c5',
    borderRadius: 24,
    padding: 22,
    marginBottom: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#2266c5',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
},

summaryLabel: {
    color: '#ecf8ff',
    fontSize: 14,
    fontWeight: '600',
},

summaryNumber: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 4,
},

summaryCaption: {
    color: '#ecf8ff',
    fontSize: 12,
    marginTop: 2,
},

summaryIcon: {
    width: 68,
    height: 68,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
},

searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DDD8F5',
    marginBottom: 24,
},

input: {
    flex: 1,
    color: '#292640',
    fontSize: 15,
    paddingVertical: 16,
    paddingLeft: 12,
},

sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
},

section: {
    color: '#292640',
    fontSize: 19,
    fontWeight: 'bold',
},

addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 3,
},

addButtonText: {
    color: '#2266c5',
    fontSize: 12,
    fontWeight: 'bold',
},

card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ECEAF5',
},

avatar: {
    width: 48,
    height: 48,
    borderRadius: 36,
    backgroundColor: '#e2eafd',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
},

avatarText: {
    color: '#2266c5',
    fontSize: 20,
    fontWeight: 'bold',
},

info: {
    flex: 1,
},

nama: {
    color: '#292640',
    fontSize: 15,
    fontWeight: 'bold',
},

prodi: {
    color: '#85839A',
    fontSize: 12,
    marginTop: 5,
},

emptyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 28,
    alignItems: 'center',
},

emptyTitle: {
    color: '#292640',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
},

emptySubtitle: {
    color: '#85839A',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 7,
},
});
