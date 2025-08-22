package com.androiduiscreen.ui.components

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.History
import androidx.compose.material.icons.filled.Map
import androidx.compose.material.icons.filled.Schedule
import androidx.compose.material.icons.filled.Settings
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun BottomNavigation(
    activeTab: String,
    onTabChange: (String) -> Unit,
    modifier: Modifier = Modifier
) {
    val tabs = listOf(
        BottomNavTab("history", "History", Icons.Default.History),
        BottomNavTab("pending", "Pending", Icons.Default.Schedule),
        BottomNavTab("map", "Map", Icons.Default.Map),
        BottomNavTab("settings", "Settings", Icons.Default.Settings)
    )

    NavigationBar(
        modifier = modifier,
        containerColor = MaterialTheme.colorScheme.surface
    ) {
        tabs.forEach { tab ->
            NavigationBarItem(
                selected = activeTab == tab.id,
                onClick = { onTabChange(tab.id) },
                icon = {
                    Icon(
                        imageVector = tab.icon,
                        contentDescription = tab.label
                    )
                },
                label = {
                    Text(
                        text = tab.label,
                        fontSize = 12.sp
                    )
                }
            )
        }
    }
}

private data class BottomNavTab(
    val id: String,
    val label: String,
    val icon: ImageVector
)