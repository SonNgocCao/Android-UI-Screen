package com.androiduiscreen

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Search
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.androiduiscreen.data.InspectionItem
import com.androiduiscreen.data.InspectionStatus
import com.androiduiscreen.data.MockData
import com.androiduiscreen.ui.components.BottomNavigation
import com.androiduiscreen.ui.components.FilterButton
import com.androiduiscreen.ui.components.ItemCard

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun InspectionApp() {
    var searchText by remember { mutableStateOf("") }
    var activeTab by remember { mutableStateOf("history") }
    var selectedTypeFilter by remember { mutableStateOf<String?>(null) }
    var selectedStatusFilter by remember { mutableStateOf<InspectionStatus?>(null) }
    
    val filteredItems = remember(searchText, selectedTypeFilter, selectedStatusFilter) {
        MockData.inspectionItems.filter { item ->
            val matchesSearch = item.title.contains(searchText, ignoreCase = true) ||
                               item.description.contains(searchText, ignoreCase = true)
            val matchesType = selectedTypeFilter == null || item.type == selectedTypeFilter
            val matchesStatus = selectedStatusFilter == null || item.status == selectedStatusFilter
            
            matchesSearch && matchesType && matchesStatus
        }
    }
    
    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Text(
                        text = "Inspections",
                        fontWeight = FontWeight.SemiBold
                    )
                }
            )
        },
        bottomBar = {
            BottomNavigation(
                activeTab = activeTab,
                onTabChange = { activeTab = it }
            )
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .padding(horizontal = 16.dp)
        ) {
            Spacer(modifier = Modifier.height(8.dp))
            
            // Search Bar
            OutlinedTextField(
                value = searchText,
                onValueChange = { searchText = it },
                modifier = Modifier.fillMaxWidth(),
                placeholder = { Text("Search inspections...") },
                leadingIcon = {
                    Icon(
                        imageVector = Icons.Default.Search,
                        contentDescription = "Search"
                    )
                },
                singleLine = true
            )
            
            Spacer(modifier = Modifier.height(16.dp))
            
            // Filter Buttons Row
            LazyRow(
                horizontalArrangement = Arrangement.spacedBy(8.dp),
                contentPadding = PaddingValues(horizontal = 0.dp)
            ) {
                item {
                    FilterButton(
                        label = "Type",
                        isActive = selectedTypeFilter != null,
                        onClick = { 
                            selectedTypeFilter = if (selectedTypeFilter != null) null else "Electrical"
                        }
                    )
                }
                item {
                    FilterButton(
                        label = "Status",
                        isActive = selectedStatusFilter != null,
                        onClick = { 
                            selectedStatusFilter = if (selectedStatusFilter != null) null else InspectionStatus.PENDING_REVIEW
                        }
                    )
                }
                item {
                    FilterButton(
                        label = "Date",
                        isActive = false,
                        onClick = { /* TODO: Implement date filter */ }
                    )
                }
                item {
                    FilterButton(
                        label = "Location",
                        isActive = false,
                        onClick = { /* TODO: Implement location filter */ }
                    )
                }
            }
            
            Spacer(modifier = Modifier.height(16.dp))
            
            // Items List
            LazyColumn(
                verticalArrangement = Arrangement.spacedBy(8.dp),
                contentPadding = PaddingValues(bottom = 16.dp)
            ) {
                items(filteredItems) { item ->
                    ItemCard(item = item)
                }
                
                if (filteredItems.isEmpty()) {
                    item {
                        Box(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(32.dp),
                            contentAlignment = Alignment.Center
                        ) {
                            Text(
                                text = "No inspections found",
                                color = MaterialTheme.colorScheme.onSurfaceVariant,
                                fontSize = 16.sp
                            )
                        }
                    }
                }
            }
        }
    }
}