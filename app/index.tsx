import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/theme";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Ionicons name="fitness" size={80} color={Colors.electricLime} />
        </View>
        <Text style={styles.title}>Shukuma</Text>
        <Text style={styles.subtitle}>Your Daily Fitness Journey</Text>
      </View>

      {/* Features Section */}
      <View style={styles.featuresContainer}>
        <View style={styles.featureItem}>
          <Ionicons name="calendar" size={32} color={Colors.deepTeal} />
          <Text style={styles.featureText}>Daily Exercises</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="trending-up" size={32} color={Colors.vibrantOrange} />
          <Text style={styles.featureText}>Track Progress</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="barbell" size={32} color={Colors.sunsetCoral} />
          <Text style={styles.featureText}>Custom Workouts</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.loginButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => router.push("/login")}
        >
          <Ionicons name="log-in" size={24} color={Colors.coolWhite} />
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.registerButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => router.push("/register")}
        >
          <Ionicons name="person-add" size={24} color={Colors.charcoalGray} />
          <Text style={[styles.buttonText, styles.registerButtonText]}>
            Register
          </Text>
        </Pressable>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>Start your fitness journey today! 💪</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.midnightBlue,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 60,
    paddingHorizontal: 24,
  },
  header: {
    alignItems: "center",
    marginTop: 40,
  },
  iconContainer: {
    backgroundColor: Colors.deepTeal,
    borderRadius: 100,
    padding: 30,
    marginBottom: 24,
    shadowColor: Colors.electricLime,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 56,
    fontWeight: "bold",
    color: Colors.electricLime,
    marginBottom: 8,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.coolWhite,
    opacity: 0.9,
    textAlign: "center",
  },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 20,
    marginVertical: 40,
  },
  featureItem: {
    alignItems: "center",
    gap: 8,
  },
  featureText: {
    color: Colors.coolWhite,
    fontSize: 12,
    textAlign: "center",
    opacity: 0.8,
  },
  buttonContainer: {
    width: "100%",
    gap: 16,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  loginButton: {
    backgroundColor: Colors.deepTeal,
  },
  registerButton: {
    backgroundColor: Colors.electricLime,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.coolWhite,
  },
  registerButtonText: {
    color: Colors.charcoalGray,
  },
  footer: {
    color: Colors.slateGray,
    fontSize: 14,
    textAlign: "center",
    marginTop: 20,
  },
});
