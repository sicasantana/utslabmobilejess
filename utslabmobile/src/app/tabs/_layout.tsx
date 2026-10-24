import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    return (
    <Tabs
        screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2266c5',
        tabBarInactiveTintColor: '#9693AA',
        }}
    >
    <Tabs.Screen
        name="index"
        options={{
            title: 'nomor 1',
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkbox-outline" size={size} color={color} />
            ),
        }}
    />

    <Tabs.Screen
        name="mahasiswa"
        options={{
            title: 'nomor 2 ',
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
        ),
        }}
    />
</Tabs>
);
}
